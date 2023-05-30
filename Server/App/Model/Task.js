const mongoose=require("mongoose")
/*const Schema=mongoose.Schema*/

const userTask=new mongoose.Schema({
    title:{
        type:String,
        maxlength:50,
        required:[true,"title is needed"]
    },
    description:{
        type:String,
        maxlength:120,
        required:[true, "description in needed"]
    },
    status:{
      type:String,
      required:[true, "status in needed"]
       
    },
    user_Id:{
        type:mongoose.Schema.Types.ObjectId
    }


})

const task=mongoose.model("task",userTask)

module.exports=task