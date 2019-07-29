var express = require('express');
var app = express();
const crypto2 = require('crypto2');

const { privateKey, publicKey } = crypto2.createKeyPair();

// Encryption
function encryption(data) {
    encrypted = await crypto2.encrypt.rsa(data, publicKey);
    return encrypted;
}


// Decryption
function decryption(secret){
    const decrypted = await crypto2.decrypt.rsa(secret, privateKey);
    return decrypted;

}

app.get('/', function (req, res) {
    var word = "hello";
    var data1 = await encryption(word);
    var data2 = await decryption(data1);

    console.log(data1);
    console.log(data2);


});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});




/*
let data = {
        text : '123aGC'
    };
    var string1 = JSON.stringify(data.text);
    var string2 = string1.replace(/["']/g, "");

    if(string2.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)){
        res.send("Match")
    }
    else{
        res.send("Does not match");
    }
 */
