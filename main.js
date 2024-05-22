require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 4000

// database connection
mongoose.connect(process.env.DB_URL, {useNewParser: true})
const db = mongoose.connection()
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('Connected to the database'))


app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(PORT, ()=>{console.log("Server started http://localhost:"+PORT)})

