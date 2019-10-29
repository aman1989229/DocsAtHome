const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


var publicDir = require('path').join(__dirname,'/public');
const app = express(); 
app.use(express.static(publicDir));

const User = require('../models/user');

//>-----------------Routes are here----------------------<
 
 router.get('/',(req,res)=>{
    res.render('home');
    });
    
    router.get('/askdoc',(req,res)=>{
      res.render('askdoc');
      });
    
 
  router.get('/afterlogin',(req,res)=>{
    res.render('afterlogin');
    });
//>----------------end here-----------------------------<

 module.exports=router;