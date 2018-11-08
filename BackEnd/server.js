var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// MONGOOSE LAB
// Connecting to database
var mongoose = require('mongoose');

var mongoDB = 'mongodb://kevin_niland:JustaHollow97@ds111422.mlab.com:11422/mongo_express_lab';
mongoose.connect(mongoDB);

// Define schema
var Schema = mongoose.Schema;

var postSchema = new Schema({
    // Vars
    title: String,
    content: String,
    image: String
})

// // Model
var PostModel = mongoose.model('post', postSchema);
//var UserModel = mongoose.model('users', userSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.post('/api/posts', function(req, res){
    PostModel.create ({
        title:req.body.title,
        content:req.body.content,
        image:req.body.image
    })
})

app.get('/api/posts', function(req, res) {
    PostModel.find(function(err, data) {
        if (err) {
            res.send(err);
        }

        res.json(data);
    });
})

app.get('/getposts', function (req, res) {
    console.log("Get post");

    PostModel.findOne({'title': req.params.title}, 
        function (err, data) {
            if (err) {
                return handleError(err);
            }

            res.json(data);
        });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})