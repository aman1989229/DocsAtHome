const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

 router.get('/signup',(req,res)=>{
 res.render('signup');
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
  email:req.body.email
 });
 newuser.save()
 .then((result) => {
    res.json({
      success: true,
      msg: `Successfully added!`,
      result: {
        _id: result._id,
        name: result.name,
        email: result.email,
      }
    });
  })
   
 });

 module.exports=router;