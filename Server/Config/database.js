const mongoose=require("mongoose")

const database=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/task")
    .then(()=>{
        console.log("database connected successfully")
    })
    .catch(()=>{
        console.log("failed to connect with database")
    })
}

module.exports=database