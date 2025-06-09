import { Router } from "express";
import {contobjct} from "./instance.js"

const userRouter =Router();
userRouter.get("/",(req,res)=>{
        res.send("hello world");
})
userRouter.post("/issue",async(req,res)=>{
        console.log(req.body);
        console.log(contobjct);
        
        
        const {ID ,Name,Course,Grade,Date}=req.body
        const txReceipt=await contobjct.issue(ID ,Name,Course,Grade,Date);
        console.log(txReceipt);
        res.status(200).send("Success");


})
userRouter.get("/getcerti/:id",async(req,res)=>{
        console.log(req.params.id);
        const result=await contobjct.Certificates(req.params.id);
        if(result){
                res.status(200).send(result)
        }
        else{
                res.status(400).send("invalid")
 
        }
        
})
export default userRouter
