const express = require("express");

const app = require("express")
var cron = require('node-cron');
const Redis = require("ioredis");

app.use(express.json());
const redis = new Redis();
redis.set("mykey", "value","EX",120);

cron.schedule('1 * * * *', () => {
    console.log('running every minute 1, 2, 4 and 5');
  });
  reddis.get("mykey",(err,result)=>{
    if(err){
        console.log(err)
    }else{
       console.log(result);
        
    }
  })

///test route

app.post("/",(req,res)=>{
    res.send("this is test route")
})
app.use("/admin", AdminRoute)
app.use("/user", UserRoute)

app.listen(8080, ()=>{
    connectToDb()
    console.log("server started")
})