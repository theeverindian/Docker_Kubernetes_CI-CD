var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.end("Hello World ! This is running in docker container");
});

app.listen(3001,()=>{
console.log("listening on port 3001")
});