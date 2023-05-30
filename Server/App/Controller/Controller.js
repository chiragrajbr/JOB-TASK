const userModel=require("../Model/Model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const Controller={}

Controller.register=(req,res)=>{
    const body=req.body
    const reg=new userModel(body)
    bcrypt.genSalt()
    .then((salt)=>{
        bcrypt.hash(reg.password,salt)
        .then((encrypted)=>{
            reg.password=encrypted
            reg.save()
            .then((user)=>{
                res.json(user)
            })
            .catch((err)=>{
                res.json({
                    "error":err.message
                })
            })
        })
    })
    .catch(()=>{
        res.json("failed to generate salt value")
    })
}

Controller.login=(req,res)=>{
    const body=req.body
    userModel.findOne({name:body.name})
    .then((user)=>{
        bcrypt.compare(body.password,user.password)
        .then((response)=>{
            if(response){
                const token={
                    _id:user._id,
                    name:user.name,
                    email:user.email
                }
               const generatedtoken= jwt.sign(token,"pass",{expiresIn:"12d"})
               res.json({
                token:generatedtoken
               })
            }else{
                res.json("token not generaed")
            }
           
        })
        .catch(()=>{
            res.json("invalid user or password")
        })
    })
    .catch(()=>{
        res.json("invalid user")
    })
}

module.exports=Controller