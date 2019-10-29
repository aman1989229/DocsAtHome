const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


var publicDir = require('path').join(__dirname,'/public');
const app = express(); 
app.use(express.static(publicDir));

const User = require('../models/user');

//>-----------------Routes are here----------------------<
 router.get('/signup',(req,res)=>{
 res.render('signup');
 });

 router.get('/signin',(req,res)=>{
  res.render('signin');
  });
 router.get('/',(req,res)=>{
    res.render('home');
    });
    router.get('/askdoc',(req,res)=>{
      res.render('askdoc');
      });
    
 router.post('/signup',(req,res)=>{
    let newuser =new User({
  name:req.body.name,
  email:req.body.email,
  phone:req.body.phone,
  password:req.body.password
 });
 newuser.save();
 console.log('success');
  })

  router.get('/afterlogin',(req,res)=>{
    res.render('afterlogin');
    });
//>----------------end here-----------------------------<

 module.exports=router;