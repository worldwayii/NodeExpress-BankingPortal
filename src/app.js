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
app.get('/savings', function(req, res){
    res.render('account', {title: 'Savings Summary', account: accounts.savings });
});
app.get('/credit', function(req, res){
    res.render('account', {title: 'Credit Summary', account: accounts.credit });
});
app.get('/profile', function(req, res){
    res.render('profile', {title: 'Profile Summary', user: users[0] });
});


const userData =JSON.parse(fs.readFileSync( path= '/src/json/accounts.json',  encoding= 'UTF8' ));
const users = userData;

app.listen(3000, () => { console.log('PS Project running on port 3000!')});
