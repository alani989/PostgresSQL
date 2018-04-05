var express = require('express');
var app = express();
var promise = require('bluebird');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//set views path
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.get('/', function (req, res) {
    res.render('form');
});

// defined the options for the pg-promise library
var options = {
    promiseLib: promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var conn = 'postgres://localhost:5432/pgpromise';
var db = pgp(conn);

app.post('/albums', function (req, res) {
    console.log('passed the test');
    let name = req.body.albumName;
    let year = parseInt(req.body.albumYear);
    let id = parseInt(req.body.artistId);

    db.none('INSERT INTO album(name,year,artist_id) values($1,$2,$3)',
        [name, year, id])
        .then(function () {
            db.any('SELECT * FROM album').then(function (data) {
                res.render('albums', { 'albums': data });
                console.log(data);
            })
        })// end of 'then' promise
})

app.get('/albums', function (req, res) {
    // fetch dishes from the database
    db.any('SELECT * FROM album').then(function (data) {
        // res.render(page to render, object to pass to the page)
        res.render('albums', { 'albums': data });
    })
})


//connect to server
app.listen(8080, function () {
    console.log('8080 is the magic port');
});