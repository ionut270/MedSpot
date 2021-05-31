const schema = require('../database/schema');
module.exports = async (req, res) => {
    var feed = await schema.feed.find({});
    res.send(feed);
  }