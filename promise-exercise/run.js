var rp = require('request-promise');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

urls = [
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
];

// // using promise-request
// const htmlPage = {
//     method: 'GET',
//     url: urls[0],
//     json: true
// };

// rp(htmlPage)
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


// promise.all
var p1 = new Promise(function (resolve, reject) {
    resolve(urls[0]);
});
var p2 = new Promise(function (resolve, reject) {
    resolve(urls[1]);
});
var p3 = new Promise(function (resolve, reject) {
    resolve(urls[2]);
});
var p4 = new Promise(function (resolve, reject) {
    resolve(urls[3]);
});
var p5 = new Promise(function (resolve, reject) {
    resolve(urls[4]);
});

Promise.all([p2, p1, p3, p4, p5])
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });


var server = app.listen(3000, function () {
    console.log('Listening on port 3000 ');
})