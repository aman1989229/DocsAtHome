require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const config = require('./config/db');
const ejs= require('ejs');
const engine=require('ejs-mate');




mongoose.connect(process.env.MONGODB_URI||process.env.DB_URL);
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`);
});
//images css & js means public path defined here for using static request
const app = express();
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

//////////////////////////////////////////////////////

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.engine('ejs',engine);
app.set('view engine','ejs');

app.use(require('./routes/main'));
/* Admin routes*/
const adminRouter = require('./routes/admin');
app.use('/admin',adminRouter);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});