module.exports = (app)=>{
    // handler for /profile route
    require('./user.js')(app);
}