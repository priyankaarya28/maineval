const express = require("express");

const app = require("express")

app.use(express.json());

///test route

app.post("/",(req,res)=>{
    res.send("this is test route")
})
app.use("/Admin", AdminRoute)
app.use("/user", UserRoute)

app.listen(8080, ()=>{
    connectToDb()
    console.log("server started")
})