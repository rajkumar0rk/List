import express, { Request, Response } from "express";

const app=express();

app.use("/",(req:Request,res:Response)=>{
    res.send("hello")
})

app.listen("8000",()=>{
    console.log(`server run port 8000}`)
})