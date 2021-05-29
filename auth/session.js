const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
  uri: process.env.URI_MONGO,
  collection: 'sessions',
  autoReconnect:true
});

module.exports = (app) => {
    app.use(
        session(
            {
                secret: 'Super secret token',
                proxy: true,
                key: "sid",
                resave: true,
                unset: 'destroy',
                store: store,
                saveUninitialized: false,
                cookie: {
                    path: '/',
                    secure: false,
                    maxAge: 1000*60*60*24,
                    httpOnly: false,
                    domain:".bountymonkey.me"
                }
            }
        )
    )
}