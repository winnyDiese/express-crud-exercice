
const express = require('express')
const router = express.Router()
const User = require('../models/users')
const multer = require('multer')

// Image upload
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filemane: function(req,file,cb){
        cb(null,file.fieldname+"_"+DataTransfer.now()+"_"+file.originalname)
    }
})



router.get('/',(req,res)=>{
    // res.send('Home page...')
    res.render('index',{title:"Home page"})
})

router.get('/add',(req,res)=>{
    res.render('add_user',{title:"Add user"})
})

module.exports = router
