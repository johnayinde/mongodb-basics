
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ayinde_john";


mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('ayinde_john');

    dbo.createCollection('interns', (err, res) => {
        if (err) throw err;
        console.log('interns collection created');
         db.close();
    })
   

})