let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
      item: ['media:thumbnail'],
    }
  });

module.exports = (app) => {
    app.get('/rss',async (req, res) => { 
         let feed= await parser.parseURL('https://medicalxpress.com/rss-feed/');
         res.send(feed.items);
     });
}