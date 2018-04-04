var express = require('express');
var app = express();
//set views path
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.get('/', function (req, res) {
    res.render('albumForm');
});
//connect to server
app.listen(8080, function () {
    console.log('8080 is the magic port');
});