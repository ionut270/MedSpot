const upload = require('./upload')

module.exports = (app)=>{
    app.post('/upload/id_card',(req,res)=>{ upload(req,res); })
}