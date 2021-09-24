const fs = require('fs');
const path = require('path');
const express = require('express');
const { root } = require('cheerio');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accountData =JSON.parse(fs.readFileSync( path= '/src/json/accounts.json',  encoding= 'UTF8' ));
const accounts = accountData;

app.get('/', function(req, res){
    res.render('index', {title: 'Account Summary', account: accounts });
});


const userData =JSON.parse(fs.readFileSync( path= '/src/json/accounts.json',  encoding= 'UTF8' ));
const users = userData;

app.listen(3000, () => { console.log('PS Project running on port 3000!')});
