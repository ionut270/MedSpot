'use strict';
// read .env file
require("dotenv").config();
console.out = (str) => console.log(`${Date.now()} : ${str}`)

// Server init
const express       = require("express")
const app           = express();
const cors          = require("cors");
const cookieParser  = require('cookie-parser');
const path          = require('path');

// Init server props
app.use(cors());
app.use(express.urlencoded({extended: true }));
app.use(express.json()                       );
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname + `./client/build/static`)));

// Auth with passport and google oauth
// require('./auth/passport')(app);
// require('./router/auth'  )(app);

// Auth utils import
//app.use("./auth/auth_check");

// Init listener
app.listen(process.env.PORT,(err)=>{
    if(err) console.error(err);
    else    console.log(`App running on port ${process.env.PORT}`);
});

/** Import here server connectors & initiators */

// Import router app
require("./Routes/router")(app);