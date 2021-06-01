const schema = require('../database/schema');

module.exports = (app) => {
    app.get('/posts', async (req, res) => {
        const likes = await schema.like.find({ user_id: req.user._id });
        const posts = await schema.post.find()
        res.send({ likes: likes, posts: posts });
    });
    app.post('/posts', async (req, res) => {
        const { name, picture, _id } = req.user;

        var current_datetime = new Date()
        var formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()

        const post = new schema.post({
            user_id: _id,
            name: name,
            picture: picture,
            post: req.body.comment,
            time: formatted_date,
            likes: 0,
            dislikes: 0
        })
        await post.save();
        res.status(200).send({ status: "sucess" });
    });
    app.put('/posts', async (req, res) => {
        await schema.post.findByIdAndUpdate(req.body._id, req.body.update);
        res.status(200).send({ status: "sucess" })
    });
    app.delete('/posts', async (req, res) => {
        await schema.post.findByIdAndDelete(req.body._id);
        res.status(200).send({ status: "sucess" })
    });

    app.post('/post/like/:id', async (req, res) => {

        // user previously disliked this ? 
        var disliked = await schema.like.find({ post_id: req.params.id, user_id: req.user._id })
        if (disliked.length > 0) {
            disliked = !disliked.like;
            if (disliked) {
                await schema.like.findOneAndDelete({ post_id: req.params.id, user_id: req.user._id })
                await schema.post.findByIdAndUpdate(req.params.id, { $inc: { dislikes: -1 } });
            }
        }

        const like = new schema.like({
            post_id: req.params.id,
            user_id: req.user._id,
            like: true
        })
        await like.save();
        await schema.post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });

        res.status(200).send({ status: "sucess" })
    })
    app.delete('/post/like/:id', async (req, res) => {
        await schema.like.findOneAndDelete({ post_id: req.params.id, user_id: req.user._id })
        await schema.post.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } })
        res.status(200).send({ status: "sucess" })
    })

    app.post('/post/dislike/:id', async (req, res) => {

        // user previously liked this ? 
        var liked = await schema.like.find({ post_id: req.params.id, user_id: req.user._id })
        if (liked.length > 0) {
            liked = liked.like;
            if (liked) {
                await schema.like.findOneAndDelete({ post_id: req.params.id, user_id: req.user._id })
                await schema.post.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } });
            }
        }

        const like = new schema.like({
            post_id: req.params.id,
            user_id: req.user._id,
            like: false
        })
        await like.save();
        await schema.post.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } })

        res.status(200).send({ status: "sucess" })
    })
    app.delete('/post/dislike/:id', async (req, res) => {
        await schema.like.findOneAndDelete({ post_id: req.params.id, user_id: req.user._id })
        await schema.post.findByIdAndUpdate(req.params.id, { $inc: { dislikes: -1 } })
        res.status(200).send({ status: "sucess" })
    })
}