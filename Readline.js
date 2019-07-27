//Use readline for Terminal input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Type in alphanumeric value \n", (input) => {
    if(name.match(!(/^([0-9]|[a-z])+([0-9a-z]+)$/i))){
        console.log("Unaccepted input");
    }
    else{
        data = input;
        console.log("Accepted input");
        readline.close();

        //function to be implemented soon
        x(data);

    }

});




