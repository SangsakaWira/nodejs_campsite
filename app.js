const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const bodyParser = require("body-parser")
var port = process.env.PORT || 3000
var camps = require("./models/camps")

// app config
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")

app.get("/camps",function (req,res) {
    camps.find(function(err,data){
        res.render("index",data)
    })
})

app.post("/camps",function(req,res){
    camps.create(req.body,function (err,data) {
        if(err){
            res.send("Something went wrong")
        }else{
            res.send("Data is saved")
        }
    })
})

app.listen(port,function(){
    console.log("Server is running")
})

