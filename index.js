const express = require('express')

const app = express()
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    const data = {
        name:"subhankar dutta",
        college:"UEMK",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY_BBq9EJopJ7s6xGctOMFLvDhY7LPCIesM18ezaj&s",
        email:"subhankar0810@gmail.com"
    }
    res.render('index',data)
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("connexted to 127.0.0.1:80");
})