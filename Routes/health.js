const fetch = require('node-fetch')

module.exports = (app) => {
    app.get('/health/simptoms', async (req, res) => {
        var simptoms = await fetch(`https://sandbox-healthservice.priaid.ch/symptoms?token=${process.env.HEALTH_API_TOKEN}&format=json&language=en-gb`).then(res=>res.json())
        res.send(simptoms);
    })
    app.get('/health/issues/:id', (req, res) => {

    })
    app.get('/health/diagnosis', (req, res) => {

    })
}