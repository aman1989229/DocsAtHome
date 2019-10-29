var router = require('express').Router();
var User= require('../models/user');

router.get('/signup',(req,res)=>{
  res.render('signup');
  });
 
  router.get('/signin',(req,res)=>{
   res.render('signin');
   });

   router.post('/signup',(req,res)=>{
    
     const{name,email,phone,password}=req.body;
     let errors =[];
       if(!name||!email||!phone||!password){
         errors.push({msg:'please fill in all fields!!!'});
       }
       if(password.length<6){
        errors.push({msg:'password should be at least 6 characters long!!!'});
       }
       if(errors.length>0){
             res.render('signup',{
               errors,name,email,phone,password
              });
       }
       else{
          User.findOne({email:email})
          .then(user=>{
            if(user){
              errors.push({msg:'email already exist!!!'});
              res.render('signup',{
                errors,name,email,phone,password
               });
            }
            else{
              let newuser =new User({
                name,
                email,
                phone,
                password
               });
               newuser.save();
               console.log('success');
             }
          });
        }
      });

         



 module.exports=router;