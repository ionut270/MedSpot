const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
const schema = require('../database/schema');

module.exports = (app) => {
    app.use(async (req, res, next) => {
        if(req.path.match(/^\/api\/auth/)){
            next();
            return 0;
        }

        if (!req.headers.sessionid) {
            res.status(200).send({ auth: false })
            return 0;
        }

        var session = await schema.session.findById(req.headers.sessionid);

        // convert mongoose wierd object to a normal json
        session = JSON.stringify(session);
        session = JSON.parse(session);

        // If there is no session with this id
        if (session === null) {
            res.status(200).send({ auth: false })
            return 0;
        }

        if (new Date(session.expires) < Date.now()) {
            // Delete the session and return access error
            await schema.session.findByIdAndDelete(req.headers.sessionid)
            res.status(200).send({ auth: false })
            return 0;
        }

        req.user = await schema.user.findById(session.session.userId)

        // ask the user to enter the CNP
        if(!req.user.cnp && req.path !== '/profile'){
            res.status(200).send({ user : req.user, auth: true, complete: false })
            return 0; 
        }

        next();
    })

    app.get('/session', (req, res) => {
        res.status(200).send({ auth: true })
    })

    app.delete("/api/auth/logout", async (req, res) => {
        await req.session.destroy();
        await schema.session.findByIdAndDelete(req.headers.sessionid);
        res.status(200)
        res.json({ message: "Logged out successfully" })
    })
    app.post("/api/auth/google", async (req, res) => {
        const { token } = req.body
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const profile = ticket.getPayload();
        var user = {
            name: profile.name,
            family_name: profile.family_name,
            given_name: profile.given_name,
            picture: profile.picture,
            email: profile.email
        }

        // register the user into the database
        var data = await schema.user.findOneAndUpdate({ email: profile.email }, user, { upsert: true, new: true, setDefaultsOnInsert: true });
        req.session.userId = data._id;

        user.sessionID = req.sessionID

        res.status(201)
        res.json(user)
    })
}