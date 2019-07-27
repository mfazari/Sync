// setting up the environment
var express = require('express');
const crypto2 = require('crypto2');
var app = express();


// Create Keys
const { privateKey, publicKey } = await crypto2.createKeyPair();

//Encryption
async function encryption(data) {
    const encrypted = await crypto2.encrypt.rsa(data, publicKey);
    return encrypted;
}

//Decryption
async function decryption(secret){
    const decrypted = await crypto2.decrypt.rsa(secret, privateKey);
    return decrypted;

}

// Save in database
app.post('/name/add', (req, res, next) => {

    var name = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };

    dbase.collection("name").save(name, (err, result) => {
        if(err) {
            console.log(err);
        }

        res.send('name added successfully');
    });
});


// Read from database
app.get('/name', (req, res) => {
    dbase.collection('name').find().toArray( (err, results) => {
        res.send(results)
    });
});




app.post(3000, function () {
    console.log('Example app listening on port 3000!');
})

