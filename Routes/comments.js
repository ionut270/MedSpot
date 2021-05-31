const schema = require('../database/schema');
module.exports = async (req, res) => {
  var com = await schema.com.find({
  post_id:req.body.id
  });
  res.send(com);
}