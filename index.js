// const mongo = require('mongodb');
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/john_ayinde"; // connection url
const updateMovie = require('./updateinterns');
const insertMovies = require('./interns');
const findDoc = require('./findinterns');
// const findDoc = require('./findinterns');
const assert = require('assert');

const dbName = 'john_ayinde';

const client = new mongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });

client.connect(function (err) {
    if (err) throw err;
    assert.equal(null, err);
    console.log("connected to Server");
    const db = client.db(dbName);
   
    // insertMovies(db, function (result) {
    //     console.log(result);
    //     client.close();
    // });

    findDoc.findFirstDoc(db, function () {
        findDoc.findAllRatingSeven(db, function () {
            findDoc.findAllMovieTitle(db, function () {
                client.close();
            });
        });
    });
    
    
    // updateMovie(db,function(){
    //     client.close();
    // });
    
});