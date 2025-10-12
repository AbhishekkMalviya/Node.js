const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.end('homepage');
})

app.get('/contact-us', function(req, res){
    res.end(`You can contact me on abhishekmalviya997@gmail.com`);
})

app.get('/tweet',function(req, res){
    res.end(`tweet1\ntweet2\n`);
})

app.post('/tweet', function(req,res){
    res.status(201).end(`Tweet created Successfully`);

})

app.listen(8000,()=> console.log(`app is listening on PORT 8000`));