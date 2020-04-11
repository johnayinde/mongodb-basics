
const assert = require('assert');

const insertMovies = function (db, callback) {
	// Get the documents collection
	const collection = db.collection('myMovies');
	// Insert some documents to the collection
	collection.insertMany([
		{ movie: "The Banker", year: "2020", rating: 8 },
		{ movie: "Bad Boys", year: "2020", rating: 7 },
		{ movie: "The Hunt", year: "2020", rating: 7 },
		{ movie: "Bloodshot", year: "2020", rating: 7.5 },
		{ movie: "First Cow", year: "2020", rating: 6.5 }
	], function (err, result) {
		assert.equal(err, null);
		assert.equal(5, result.result.n);
		assert.equal(5, result.ops.length);
		console.log("Inserted " + result.insertedCount + " documents into the collection");
		callback(result);
	});
};
module.exports = insertMovies;