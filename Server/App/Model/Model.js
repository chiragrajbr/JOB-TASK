const mongoose=require("mongoose")
const isEmail=require("validator/lib/isEmail")
const passwordValidator=require("password-validator")
const verifyPasswod = new passwordValidator()
verifyPasswod.lowercase()
verifyPasswod.uppercase()

const userschema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"name is needed"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is needed"],
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "please enter valid email"
            }
        }
    },
    password:{
        type:String,
        minlength:6,
        required:[true,"password is needed"],
        validate : {
            validator : function(Password){
                return  verifyPasswod.validate(Password)
            },
            message : function(){
                return 'Password should contain atleast one uppercase and one lowercase'
            }
        }

    }

})

const userModel=mongoose.model("userModle",userschema)
module.exports=userModel