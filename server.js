const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/db');
const ejs= require('ejs');
const engine=require('ejs-mate');

mongoose.connect(config.db);
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

const app = express();

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.engine('ejs',engine);
app.set('view engine','ejs');

app.use(require('./routes/main'));
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});