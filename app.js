const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Nikhil ");
})

app.get('/hehe',(req,res)=>{
    res.send("Nikhil singh")
})

app.listen(6969,()=>{
    console.log("Port is running on 6969");
})