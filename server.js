var express = require("express");
var projectlink = require("./routers/router");
var app = express();


app.get('/', function(a,b){
    b.send('나온다');
});

app.get('/me', function(a,b){
    b.send('나의 소개');
});
app.get('/portfolio', function(a,b){
    b.send('작품들');
});
app.get('/preinterview', function(a,b){
    b.send('사전면접');
});
app.get('/contact', function(req,res){
    res.send('면접제안');
});

app.use("/user", projectlink);

app.listen(5000, function(){
  console.log('ㅇㅇㅇㅇㅇㅇㅇ');
});
