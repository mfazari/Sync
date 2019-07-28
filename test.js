// setting up our environment
var express = require('express');
const crypto2 = require('crypto2');
var app = express();

// What we need for our database connection
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
const bodyParser= require('body-parser')

// ... and some stuff to enable "post requests"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Connect to our "sample" database and listening on port 3000
MongoClient.connect('mongodb://trojan:00000000@ds247027.mlab.com:47027/crud', (err, db) => {
    if (err) return console.log(err)

    app.listen(3000, () => {
        console.log('App listening on 3000')
    });
});


// Create Keys (await deleted)
const { privateKey, publicKey } = crypto2.createKeyPair();

// Encryption
async function encryption(data) {
    const encrypted = await crypto2.encrypt.rsa(data, publicKey);
    return encrypted;
}

// Decryption
async function decryption(secret){
    const decrypted = await crypto2.decrypt.rsa(secret, privateKey);
    return decrypted;

}

// Save in database
app.post('/data/add', (req, res, next) => {

    var name = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    let data = encryption(data);

    dbase.collection('name').save(name, (err, result) => {
        if(err) {
            console.log(err);
        }

        res.send('data added successfully');
    });
});


// Read from database
app.get('/name', (req, res) => {
    dbase.collection('name').find().toArray( (err, results) => {
        res.send(results)
    });
});

