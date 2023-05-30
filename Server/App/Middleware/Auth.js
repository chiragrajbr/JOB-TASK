const Auth={}
const jwt=require("jsonwebtoken");
const userModel = require("../Model/Model");
Auth.verify=(req,res,next)=>{
    const token=req.headers.authorization
    let tokendata;
    try{
        tokendata=jwt.verify(token,"pass")
        userModel.findById({_id:tokendata._id})
        .then((user)=>{
            req.user=user
            next()
        })
        .catch((err)=>{
            res.json(err.message)
        })

    }
    catch(err){
        res.json({
            "error":err
        })
    }
}

module.exports=Auth