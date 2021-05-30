const upload = require('./upload')

module.exports = (app)=>{
    app.post('/upload/id_card',(req,res)=>{ upload(req,res); });
    app.get('/profile',(req,res)=>{ require('./user.js')(req,res) });
}