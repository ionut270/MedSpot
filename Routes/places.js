const fetch = require('node-fetch');
module.exports = (app) => {
    app.get('/places', async (req, res) => {
        const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?` +
            `input=${req.query.type.match('medicine')!== null ? req.query.type : req.query.type + ' medicine'}` +
            `&inputtype=textquery` +
            `&fields=photos,formatted_address,name,rating,opening_hours,geometry,name,place_id` +
            `&key=${process.env.PLACES_API_KEY}` +
            `&rankby=distance` +
            `&locationbias=${req.query.locationbias}`
        const data = await fetch(url).then(res => res.json());
        res.send(data);
    })
}