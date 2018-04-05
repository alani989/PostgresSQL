CREATE TABLE album (id serial PRIMARY KEY , name varchar(40) NOT NULL, year INTEGER NOT NULL, artist_id INTEGER UNIQUE);
CREATE TABLE artist (id INTEGER NOT NULL REFERENCES album (artist_id) , name varchar(40));
CREATE TABLE track (name varchar(40), album_id INTEGER , duration VARCHAR(5), track_id serial PRIMARY KEY);