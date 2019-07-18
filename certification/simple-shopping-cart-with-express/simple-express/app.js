var express = require('express');
var cors = require('cors')

var app = express();
app.use(cors())

var port = process.env.port || 6700;

var fs = require('fs')

app.get('/', function(req,res){
    res.send('Welcome to Express Server !')
});

app.get('/getProducts', function(req,res){
    fs.readFile('products.json',function(err,data){
        if(err) throw err;
        res.send(JSON.parse(data))
    })
   
});

app.listen(port,function(err){
    if(err) throw err;
    console.log('Express Server is running on Port ' + port)
    console.log("Use browser to check http://localhost:6700/getProducts !")
    console.log("Control-C to stop the server ........")
});