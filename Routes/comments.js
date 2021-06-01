const schema = require('../database/schema');

// module.exports = async (req, res) => {
//   var comments = await schema.comment.find({ post_id : req.body.id });
//   res.send(comments);
// }

module.exports = (app) => {
  app.get('/comments/:id', async (req, res) => {
    res.send(await schema.comment.find({ post_id: req.params.id }));
  });
  app.post('/comments/:id', async (req, res) => {
    const { name, picture, _id } = req.user;

    var current_datetime = new Date()
    var formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()

    const comment = new schema.comment({
      post_id: req.params.id,
      user_id: _id,
      name: name,
      picture: picture,
      post: req.body.comment,
      time: formatted_date
    })
    await comment.save();
    res.status(200).send({ status: "sucess" });
  });
  app.put('/comments', async (req, res) => {
    await schema.comment.findByIdAndUpdate(req.body._id, req.body.update);
    res.status(200).send({ status: "sucess" })
  });
  app.delete('/comments', async (req, res) => {
    await schema.comment.findByIdAndDelete(req.body._id);
    res.status(200).send({ status: "sucess" })
  });
}