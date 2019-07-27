// setting up the environment
var express = require('express');
const crypto2 = require('crypto2');
var app = express();


// Create Keys
const { privateKey, publicKey } = await crypto2.createKeyPair();

//Encryption
function encryption(data) {
    const encrypted = await crypto2.encrypt.rsa(data, publicKey);
    return encrypted;
}

//Decryption
function decryption(secret){
    const decrypted = await crypto2.decrypt.rsa(secret, privateKey);
    return decrypted

}


app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
