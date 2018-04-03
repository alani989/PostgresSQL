var express = require('express');
var promise = require('bluebird');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// defined the options for the pg-promise library
var options = {
    promiseLib: promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var conn = 'postgres://localhost:5432/restaurant';
var db = pgp(conn);

//public folder
app.use(express.static('app/public'));

app.get('/new', function (req, res) {
    res.render('newrestaurant');
});

app.post('/restaurantposted', function (req, res) {

    let name = req.body.name;
    let distance = parseInt(req.body.distance);
    let stars = parseInt(req.body.stars);
    let category = req.body.category;
    let favorite = req.body.favorite;
    let takeout = req.body.takeout;

    db.none('INSERT INTO restaurant(name,distance,stars,category,favorite,takeout) values($1,$2,$3,$4,$5,$6)',
        [name, distance, stars, category, favorite, takeout])
        .then(function () {
            db.any('SELECT * FROM restaurant').then(function (data) {
                // res.render(page to render, object to pass to the page)
                res.render('restaurants', { 'restaurants': data });
            })
        })// end of 'then' promise

})

app.get('/restaurants',function(req,res){
  
    // fetch dishes from the database
    db.any('SELECT * FROM restaurant').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('restaurants', { 'restaurants': data });
    })
})


var server = app.listen(3000, function () {
    console.log('Listening on port 3000 ');
})