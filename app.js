var express = require('express');
var app = express();
var port = 5000;
var greeting= 'Hello World';


app.use(express.static('public'));

app.get('/hello', function(req,res){
    res.send(greeting);
});
app.post('/greetingChanger', function(req, res){
    greeting= greeting + '!';
    console.log('this route was hit');
    res.sendStatus(201);
})

app.listen(port, function(){
    console.log('listening on port ', port);
});