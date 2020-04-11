const assert = require('assert');


const updateMovie = function (db, callback) {
    // Get the documents collection

    const collection = db.collection('myMovies');
    // Find some documents
    let query = { movie: "The Banker"};
    let newValue = { $set: { movie: "The Ghost", year: "2019", rating: 10 } };

    collection.updateOne(query, newValue, function (err, docs) {

        assert.equal(err, null);
        console.log(`${docs.result.nModified} Document Updated`);
        console.log(docs.result)

        callback(docs);
    });
};

module.exports = updateMovie;