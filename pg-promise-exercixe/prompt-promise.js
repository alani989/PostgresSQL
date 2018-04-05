var prompt = require('prompt-promise');
var promise = require('bluebird');

// defined the options for the pg-promise library
var options = {
    promiseLib: promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var conn = 'postgres://localhost:5432/pgpromise';
var db = pgp(conn);

var data = [];

prompt('Album: ')
    .then(function album(val) {
        data.push(val);
        return prompt('Year: ')
    })
    .then(function year(val) {
        data.push(val);
        return prompt('Artist ID: ');
    })
    .then(function id(val) {
        data.push(val);
    })
    .then(function updateTable() {
        db.none('INSERT INTO album(name,year,artist_id) values($1,$2,$3)',
            [data[0], data[1], data[2]]);
            prompt.done(
                function(){
                    db.$pool.end();
                }
            );
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    })