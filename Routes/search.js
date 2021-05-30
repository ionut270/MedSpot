const db=require('../DB/db.js');
const schema = require('../database/schema');
module.exports = async (req, res) => {
    //const filter = {
    //    "$and": [{"lat":{ "$lt" : position.lat+20}}],
    //    "$and": [{"long":{ "$lt" : position.lng+20}}],
    ///    "$and": [{"long":{ "$gt" : position.lng-20}}],
    //    "$and": [{"lat":{ "$gt" : position.lng-20}}] }
    var cab = await schema.cab.find({ lat:{ $lte: req.body.lat+20 },lat:{ $gte: req.body.lat-20 }});
    res.send(cab);  
}