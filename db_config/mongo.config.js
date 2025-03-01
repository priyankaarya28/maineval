const mongoose = require("mongoose");
const connectToDb = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ maineval")
        console.log("connected to db")
    }catch(err){
        console.log("err in connecting db")
    }
}
module.exports = connectToDb
