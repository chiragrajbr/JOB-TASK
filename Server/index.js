const express=require("express")
const database=require("./Config/database")
const routes=require("./Config/router")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use(routes)
const port=3009

database()



app.listen(port,()=>{
    console.log("server is running in the port",port)
})