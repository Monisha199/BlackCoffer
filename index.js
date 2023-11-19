const express = require('express');
const app = express();
const port = 8000;
const db = require('./config');
var cors = require("cors");

app.use(cors());
app.use('/',require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log("server is up");
})


