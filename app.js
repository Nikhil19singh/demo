const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Ayush bhadwa");
})

app.get('/ayushChodu',(req,res)=>{
    res.send("Ayush singh")
})

app.listen(6969,()=>{
    console.log("Port is running on 6969");
})