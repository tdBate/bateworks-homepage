import express from "express";

const app = express(); 
app.listen(3000)

app.use((req,res)=>{
    console.log("user connected");
    res.status(200).send("lálálálá");
});