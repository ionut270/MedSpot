const schema = require('../database/schema');
module.exports = (app) => {
    app.get('/profile', (req, res) => { res.send(req.user) });
    app.get('/users', async (req, res) => res.send(await schema.user.find()));
    app.patch   ('/profile',async (req,res)=>{
        await schema.user.findByIdAndUpdate(req.user._id,req.body);
        res.send({})
    })
}