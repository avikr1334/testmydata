const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.listen(9000,()=>{
    console.log("connexted to 127.0.0.1:9000");
})