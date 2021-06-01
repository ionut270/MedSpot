'use strict';
// read .env file
require("dotenv").config();
console.out = (str) => console.log(`${Date.now()} : ${str}`)

// Server init
const express = require("express")
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const path = require('path');

// Init server props
app.use(cors({
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'x-requested-with'],
    'exposedHeaders': ['sessionId'],
    origin: ['https://bountymonkey.me','https://bountymonkey.me:80', 'https://localhost:3000', 'http://localhost:3000', 'http://bountymonkey.me:80', 'http://bountymonkey.me']
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname + `/client/build/static`)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

// Session handler
require('./auth/session')(app);

// Conect to mongodb database
require('./database/schema');

// Auth module
require('./auth/oauth')(app);

// Import router app
require("./Routes/router")(app);

// Init listener
app.listen(process.env.PORT, (err) => {
    if (err) console.error(err);
    else console.out(`App running on port ${process.env.PORT}`);
});