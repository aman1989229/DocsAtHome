const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


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
    
   
  router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{
      name: req.user.name
    });
    });
//>----------------end here-----------------------------<

 module.exports=router;