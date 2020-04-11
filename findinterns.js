const assert = require('assert');

const findFirstDoc = function (db, callback) {
    // Get the documents collection

    const collection = db.collection('myMovies');
    // Find some documents

    collection.findOne({}, function (err, docs) {
        assert.equal(err, null);
        console.log("First Document");
        console.log(docs);
        callback(docs);
    });
};

const findAllRatingSeven = function (db, callback) {
    // Get the documents collection

    const collection = db.collection('myMovies');
    // Find some documents

    collection.find({ rating: 7 }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("7 Ratings");
        console.log(docs);

        callback(docs);
    });
};

const findAllMovieTitle = function (db, callback) {
    // Get the documents collection

    const collection = db.collection('myMovies');
    // Find some documents

    collection.find({}, 
        { projection: { _id: 0, year: 0, rating: 0 } }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("All movie title");
        console.log(docs);
        callback(docs);
    });
};

module.exports = {
    findFirstDoc: findFirstDoc,
    findAllRatingSeven: findAllRatingSeven,
    findAllMovieTitle: findAllMovieTitle
}

