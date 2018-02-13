const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const request = require('request');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res, next) {
    baseSearch(res)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

function baseSearch(res) {
    request.get({ url: "https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel" },
                function(error, response, body) {
                  if (!error && response.statusCode == 200) {
                       var data = JSON.parse(body);
                       res.render('pages/index', data);
                     }
                 });
}
