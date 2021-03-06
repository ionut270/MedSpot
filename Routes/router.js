module.exports = (app)=>{
    require('./user.js')(app);
    require('./post.js')(app);
    require('./comments.js')(app);
    require('./health.js')(app);
    require('./places.js')(app);
    require('./phone.js')(app);
    require('./rss.js')(app);
    app.post('/search',(req,res)=>{require('./search.js')(req,res)});
}