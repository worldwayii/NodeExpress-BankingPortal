const fs = require('fs');
const path = require('path');
const express = require('express');
const { root } = require('cheerio');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index', {title: 'Index'});
});

app.listen(3000, ()=>{ console.log('PS Project running on port 3000!')});