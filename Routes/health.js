const fetch = require('node-fetch')

const getToken=()=>{
    return new Promise(async (resolve,reject)=>{
        const token = await fetch(`${process.env.HEALTH_API_URL_AUTH}/login`,{
            method : 'POST',
            headers : {Authorization: `Bearer ${process.env.HEALTH_USERNAME}:${process.env.HEALTH_PASSWORD}`}
        }).then(res=>res.json());
        resolve(token.Token);
    })
}

module.exports = (app) => {
    app.get('/health/simptoms', async (req, res) => {
        var simptoms = await fetch(`${process.env.HEALTH_API_URL}/symptoms?token=${await getToken()}&format=json&language=en-gb`).then(res=>res.json())
        res.send(simptoms);
    })
    app.get('/health/issues/:id', async (req, res) => {
        if(!req.params.id){
            const issues = await fetch(`${process.env.HEALTH_API_URL}/issues?token=${await getToken()}&format=json&language=en-gb`).then(res=>res.json())
            res.send(issues);
        } else {
            const issue = await fetch(`${process.env.HEALTH_API_URL}/issues/${req.params.id}/info?token=${await getToken()}&format=json&language=en-gb`).then(res=>res.json())
            res.send(issue);
        }
    })
    app.get('/health/diagnosis', async (req, res) => {
        const diagnostic = await fetch(`${process.env.HEALTH_API_URL}/diagnosis?symptoms=${req.query.simptoms}&gender=${req.user.gender}&year_of_birth=${ req.user.dob ? req.user.dob.split(/-/)[0] : `2020` }&token=${await getToken()}&format=json&language=en-gb`).then(res=>res.json())
        res.send(diagnostic);
    })
}