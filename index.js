var express = require('express');
const expressLayouts = require('express-ejs-layouts')
var app = express();
var things = require('./things');
app.use(expressLayouts);
app.set('layout','./layouts/full-width')
//both index.js and things.js should be in same directory
app.use('/things', things);
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'));

app.listen(3000);