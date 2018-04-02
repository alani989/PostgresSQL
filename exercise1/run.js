var express = require('express');
var app = express();

// making public file accessible
app.use(express.static('./public'));
// set ejs views
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log("connected")
});