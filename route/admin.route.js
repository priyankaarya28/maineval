const express = require("express")

const Router = express.Router()

admin.get("/users",(req,res)=>{
    res.status(200).json({msg:"this is users route"})
})
module.exports = Router

