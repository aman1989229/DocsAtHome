const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


var publicDir = require('path').join(__dirname,'/public');
const app = express(); 
app.use(express.static(publicDir));

const User = require('../models/user');
const Doctor = require('../models/doctor');
const Speciality = require('../models/speciality');


//>-----------------Routes are here----------------------<
 
 router.get('/',(req,res)=>{
    res.render('home');
    });
    
    router.get('/askdoc',(req,res)=>{
      res.render('askdoc');
      });
    
   
  router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{
      user: req.user
    });
    });

    router.get('/profile',(req,res)=>{
      Speciality.find((err,docs)=>{
        if(!err){
          res.render("doctor/profile",{
            list:docs
          });
        }
          else{
            console.log('error in retrieving data');
          }
      });
      });

      router.post('/docprofile',(req,res)=>{
    
        const{fname,lname,sex,age,category,speciality,experience,address}=req.body;
        let errors =[];
          if(!fname||!lname||!sex||!age||!category||!speciality||!experience||!address){
            errors.push({msg:'please fill in all fields!!!'});
          }
          
          if(errors.length>0){
                res.render('doctor/profile',{
                  errors,fname,lname,sex,age,category,speciality,experience,address
                 });
          }
          else{
             
               
                 let newuser =new Doctor({
                  fname,
                  lname,
                  sex,
                  age,
                  category,
                  speciality,
                  experience,
                  address
                  });
                  //Hash password
                
                    newuser.save()
                    .then(user =>{
                      res.redirect('/dashboard');
                    })
                    .catch(err =>console.log(err));
                  }
            
         });
      
         router.get('/profile1',(req,res)=>{
          Doctor.find((err,docs)=>{
            if(!err){
              res.render("doctors",{
                list:docs
              });
            }
              else{
                console.log('error in retrieving data');
              }
          });
             
        });
//>----------------end here-----------------------------<

 module.exports=router;