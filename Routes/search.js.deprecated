const schema = require('../database/schema');
module.exports = async (req, res) => {
  var cab = await schema.cab.find({
    lat: { $lte: req.body.lat + 20 },
    lat: { $gte: req.body.lat - 20 },
    lng: { $lte: req.body.lng + 20 },
    lng: { $gte: req.body.lng - 20 },
  });
  res.send(cab);
}