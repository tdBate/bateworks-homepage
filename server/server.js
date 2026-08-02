import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "node:fs"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const base_path = path.join(__dirname, "..", "sites");

const app = express(); 

//staticking the sites so I can add css and js
const siteGroups = fs.readdirSync(base_path);
for (let i = 0; i<siteGroups.length;i++) {
    app.use(express.static(path.join(base_path,siteGroups[i])));
}

app.listen(3000,()=>{console.log("Listening on :3000...")});


app.get("/tempreader",(req,res)=>{
    res.status(200).sendFile(path.join(base_path,"tempreader","index.html"));
});

app.use((req,res)=>{
    res.status(200).sendFile(path.join(base_path,"indexsite","index.html"));
});