const fetch = require('node-fetch');
module.exports = (app) => {
    app.get('/phone', async (req, res) => {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?` +
            `place_id=${req.query.id}`+
            `&fields=formatted_phone_number` +
            `&key=${process.env.PLACES_API_KEY}` 
        const data = await fetch(url).then(res => res.json());
        res.send(data);
    })
}