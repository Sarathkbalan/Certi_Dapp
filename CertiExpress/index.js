import express from "express"
import userRouter from "./Routes/userRoute.js";
import { json } from "express";

const app=express();
app.use(json())


app.use("/",userRouter)


app.listen(5000,()=>{
        console.log("server listing to port 5000");
        
})