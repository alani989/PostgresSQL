var express = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', function () {

})

// defined the options for the pg-promise library
var options = {
    promiseLib: promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var conn = 'postgres://localhost:5432/pgpromise';
var db = pgp(conn);

app.post('/albumposted', function (req, res) {

    let name = req.body.albumName;
    let year = parseInt(req.body.albumYear);
    let id = parseInt(req.body.artistId);

    db.none('INSERT INTO album(name,year,artist_id) values($1,$2,$3)',
        [name, year, id])
        .then(function () {
            db.any('SELECT * FROM album').then(function (data) {
                // res.render('restaurants', { 'restaurants': data });
                console.log(data);
            })
        })// end of 'then' promise

})