var mongo = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ayinde_john";

mongoClient.connect(url, function (err,db) {
    if (err) throw err;
    console.log('Database created by Ayinde John');
    db.close();
    
})