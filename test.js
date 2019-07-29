// setting up our environment
var express = require('express');
const crypto2 = require('crypto2');
const bodyParser= require('body-parser')
var app = express();

// Variables we take instead of database
var encr;
var decr;

/*
// What we need for our database connection

const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
const bodyParser= require('body-parser')
 */

// ... and some stuff to enable "post requests"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/*
// Connect to our "sample" database and listening on port 3000

MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if (err) return console.log(err)

    app.listen(3000, () => {
        console.log('App listening on 3000')
    });
});
 */


app.listen(3000, function () {
    console.log('App listening on port 3000!');
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


// Encrypt and save in database
app.post('/data/add', (req, res, next) => {

    let data = {
        text : req.body.text
    };

    // JSON to String
    var string = JSON.stringify(data.text);

    // Get rid of "" or '' in String
    var clean_string = string.replace(/["']/g, "");


// Check for alphanumeric input
    if(clean_string.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)) {

        let encrypted_data = encryption(clean_string);

        //temp
        encr = encrypted_data;

        /*
        dbase.collection('encrypted_data').save(encrypted_data, (err, result) => {
            if(err) {
                console.log(err);
            }

            res.send('data added successfully');
        });

         */
    }
    else{
        res.send('ERROR: Only alphanumeric values are accepted!')
    }
});


// Read and decrypt from database
app.get('/data', (req, res) => {
    /*
    dbase.collection('encrypted_data').find().toArray( (err, results) => {
        let decrypted_data = decryption(results);
        res.send(decrypted_data);
    });
     */
    decr = decryption(encr);
    res.send(decr);


});

