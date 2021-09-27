const fs = require('fs');
const path = require('path');
const express = require('express');
const { root } = require('cheerio');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accountData = JSON.parse(fs.readFileSync('src/json/accounts.json', {encoding:'utf8', flag:'r'}));
const accounts = accountData;

app.get('/', function(req, res){
    res.render('index', {title: 'Account Summary', accounts: accounts });
});

const userData = JSON.parse(fs.readFileSync('src/json/users.json', {encoding:'utf8', flag:'r'}));
const users = userData;

app.get('/savings', function(req, res){
    res.render('account', {account: accounts.savings });
});
app.get('/checking', function(req, res){
    res.render('account', {account: accounts.checking });
});
app.get('/credit', function(req, res){
    res.render('account', {account: accounts.credit });
});
app.get('/profile', function(req, res){
    res.render('profile', {user: users[0] });
});



app.listen(3000, () => { console.log('PS Project running on port 3000!')});
