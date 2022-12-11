const connexion=require('../BD/conf')
const express=require('express')

const route=express.Router()
///routes principales
route.get('/About',(req,res)=>{res.send("About")})
route.get('/Contact',(req,res)=>{res.send("Contact")})
route.get('/Reservation',(req,res)=>{res.render("reservation")})
route.get('/Sign',(req,res)=>{res.render("Sign")})
route.get('/Login',(req,res)=>{res.render("login")})
route.get('/dashbord',(req,res)=>{res.render("dashbord")})
route.get('/admin',(req,res)=>{res.render("controlAdmi")})
//routes secondaires






module.exports=route