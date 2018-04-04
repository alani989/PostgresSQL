const fs = require('mz/fs')
const rp = require('request-promise');

let p = function readFilePromise(fileName) {
    return new Promise(function (resolve, request) {
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            resolve(data);
            console.log(data.toString());
        });
    });
};

Promise.all([p('one.txt'), p('two.txt')])
    .then(function (data) {
        fs.appendFile("output.txt", data, (err) => {
            if (err) throw err;
        })
    })
    .then("Done");