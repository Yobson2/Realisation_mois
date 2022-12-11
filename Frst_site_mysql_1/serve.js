// import data
const express=require('express');
const port=8081
const route=require("./controllers/routes")
const path=require('path')
//moteurs template


// data use

const app= express();
app.use('/',route)

app.use('/static',express.static('public'));
//middlewares
app.set('view engine','ejs')


//Routers
app.get('/',(req,res)=>{
res.render('home',{})
})




//listen for port
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})