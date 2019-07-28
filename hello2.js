var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var hello = "123";
    if(hello.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)){
        res.send("Match")
    }
    else{
        res.send("Does not match");
    }

});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
