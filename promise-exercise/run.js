var rp = require('request-promise');
var express = require('express');
var app = express();

urls = [
    'https://en.wikipedia.org/wiki/Futures_and_promises',
    'https://en.wikipedia.org/wiki/Continuation-passing_style',
    'https://en.wikipedia.org/wiki/JavaScript',
    'https://en.wikipedia.org/wiki/Node.js',
    'https://en.wikipedia.org/wiki/Google_Chrome'
];

// using promise-request
const htmlPage = {
    method: 'GET',
    url: urls[3]
};

rp(htmlPage)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });


// promise.all
// var l1 = new Promise(function (resolve, reject) {
//     resolve(urls[0]);
// });
// var l2 = new Promise(function (resolve, reject) {
//     resolve(urls[1]);
// });
// var l3 = new Promise(function (resolve, reject) {
//     resolve(urls[2]);
// });
// var l4 = new Promise(function (resolve, reject) {
//     resolve(urls[3]);
// });
// var l5 = new Promise(function (resolve, reject) {
//     resolve(urls[4]);
// });

// Promise.all([l1,l2,l3,l4,l5])
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     });


var server = app.listen(3000, function () {
    console.log('Listening on port 3000 ');
})