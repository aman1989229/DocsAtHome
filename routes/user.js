var router = require('express').Router();
var User= require('../models/user');

router.get('/signup',(req,res)=>{
    res.render('signup');
});



 module.exports=router;