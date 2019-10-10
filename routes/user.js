var router = require('express').Router();
var User= require('../models/user');

router.get('/signup',(req,res)=>{
    res.render('signup');
});
 router.post('/signup',(req,res,next)=>{
   var user= new User();
   user.name=req.body.name;
   user.email=req.body.email;
 });


 module.exports=router;