const express=require("express")
const routes=express.Router()
const Controller=require("../App/Controller/Controller")
const Auth=require("../App/Middleware/Auth")
const taskController=require("../App/Controller/TaskController")
const task = require("../App/Model/Task")

routes.post("/register",Controller.register)
routes.post("/login",Controller.login)
//task
routes.post("/task/create",Auth.verify,taskController.createtask)

routes.delete("/task/deleteall",Auth.verify,taskController.deleteTask)

routes.put("/task/getbyname/:name",Auth.verify,taskController.edittask)
routes.get("/task/getbyname/:name",Auth.verify,taskController.getByTaskName)
routes.delete("/task/getbyname/:name",Auth.verify,taskController.deletebytaskName)

//tasks
routes.get("/task/alltask",Auth.verify,taskController.getTask)
routes.get("/task/incompletetask",Auth.verify,taskController.activetask)
routes.get("/task/completetask",Auth.verify,taskController.completedtask)


module.exports=routes