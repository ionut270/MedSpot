module.exports = (app)=>{
    require('./user.js')(app);
    app.post('/search',(req,res)=>{require('./search.js')(req,res)});
}