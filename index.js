const express = require("express");
const app = require("express")

app.request(express.json());
///test route
app.post("/",(req,res)=>{
    res.send("this is test route")
})


app.listen(8080, ()=>{
    console.log("server started")
})