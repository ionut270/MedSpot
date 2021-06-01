module.exports = (app)=>{
    require('./user.js')(app);
    require('./post.js')(app);
    require('./comments.js')(app);
    require('./health.js')(app);
    require('./places.js')(app);
}