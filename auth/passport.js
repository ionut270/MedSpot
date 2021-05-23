module.exports = (app)=>{
    app.use(session({
        store: new DatastoreStore({
            kind: 'express-sessions',
            name: 'trip-busters',
            expirationMs: 1000 * 60 * 60 * 24, // 24 h
            // [Update] to mongodb
            dataset: new Datastore({
                projectId: process.env.GCLOUD_PROJECT,
                keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
            })
        }),
        resave: true,
        saveUninitialized: true,
        secret: "Super secret token",
        cookie: { secure: false }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}