const taskController={}
const task=require("../Model/Task")
taskController.createtask=(req,res)=>{
    const body=req.body
    body.user_Id=req.user._id
    new task(body).save()
                    .then((details)=>{
                        res.json(details)
                    })
                    .catch((err)=>{
                        res.json(err)
                    })

}

taskController.getTask=(req,res)=>{
    const userId=req.user._id
    task.find({user_Id:userId})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

taskController.deleteTask=(req,res)=>{
    task.deleteMany({user_Id:req.user._id})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}
taskController.activetask=(req,res)=>{
    task.find({user_Id:req.user._id,status:"incomplete"})
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err.message)
    }) 
            
}

taskController.completedtask=(req,res)=>{
    task.find({user_Id:req.user._id,status:"complete"})
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err.message)
    }) 
            
}

taskController.edittask=(req,res)=>{
    const name=req.params.name
    const body=req.body
    task.findOneAndUpdate({user_Id:req.user._id,title:name},body,{new:true,runValidators:true})
                .then((data)=>{
                    res.json(data)
                })
                .catch((err)=>{
                    res.json("err in sending data")
                })
    
     
}
taskController.getByTaskName=(req,res)=>{
    const taskname=req.params.name
    task.findOne({user_Id:req.user._id,title:taskname})
            .then((details)=>{
                res.json(details)
            })
            .catch((err)=>{
                res.json({
                    "Error":err.message
                })
            })
}
taskController.deletebytaskName=(req,res)=>{
    const name=req.params.name
    task.findOneAndDelete({user_Id:req.user._id,title:name})
    .then((details)=>{
        res.json(details)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports=taskController