var router = require('express').Router();
var User= require('../models/user');
var bcrypt=require('bcrypt');
var passport=require('passport');


router.get('/profile',(req,res)=>{
    res.render('doctor.profile');
    });


    module.exports=router;