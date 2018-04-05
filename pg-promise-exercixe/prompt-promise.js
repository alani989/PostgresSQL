// require packages/libraries
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

var album = [];
var artist = [];
var track = [];

// promises for album table
prompt('Album: ')
    .then(function albumName(val) {
        album.push(val);
        return prompt('Year: ')
    })
    .then(function albumYear(val) {
        album.push(val);
        return prompt('Artist ID: ');
    })
    .then(function albumId(val) {
        album.push(val);
        return prompt('Artist Name: ');
    })
    .then(function artistName(val){
        artist.push(val)
        return prompt('Track Name: ');
    })
    .then(function trackName(val){
        track.push(val)
        return prompt('Duration: ');
    })
    .then(function trackDuration(val){
        track.push(val)
        return prompt('Track ID: ');
    })
    .then(function trackID(val){
        track.push(val)
    })
    .then(function updateAlbum() {
        db.none('INSERT INTO album(name,year,artist_id) values($1,$2,$3)',
            [album[0], album[1], album[2]])
    })
    .then(function updateArtist() {
        db.none('INSERT INTO artist(name, id) values($1,$2)',
            [artist[0],album[2]])
    })
    .then(function updateTrack(idd) {
        db.none('INSERT INTO track(name,album_id,duration) values($1,$2,$3)',
            [track[0], track[2], track[1]])
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