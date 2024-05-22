require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT, ()=>{console.log("Server started http://localhost:"+PORT)})

