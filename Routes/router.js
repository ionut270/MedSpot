module.exports = (app)=>{
<<<<<<< Updated upstream
    // handler for /profile route
    require('./user.js')(app);
=======
    app.post('/upload/id_card',(req,res)=>{ upload(req,res); });
    app.get('/profile',(req,res)=>{ require('./user.js')(req,res) });
    app.post('/search',(req,res)=>{require('./search.js')(req,res)});
>>>>>>> Stashed changes
}