const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const request = require('request');
const url = require('url');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res, next) {
    baseSearch(req, res)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

function baseSearch(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var queryString = '';
    for (key in query) {
        if (query[key]) {
            queryString = queryString + '&' + key + '=' + encodeURIComponent(query[key]);
        }
    }
    console.log("Query: " + queryString);

    request.get({ url: "https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel" + queryString},
                function(error, response, body) {
                  if (!error && response.statusCode == 200) {
                       var data = JSON.parse(body);
                       if (data["offers"] != undefined && data["offers"]["Hotel"] != undefined && data["offers"]["Hotel"].length > 0 ) {
                        console.log("Found " + data["offers"]["Hotel"].length + " offers!");
                        res.render('pages/index', data);
                       }
                       else {
                        res.render('pages/not_found', data);
                       }
                     }
                 });
}
