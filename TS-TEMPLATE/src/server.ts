import express from "express" ;
import { serverConfig } from "./config/index.js";

const app = express() ; 

const PORT = serverConfig.PORT ; 

app.listen(PORT , ()=>{
    console.log("Server is listening on port:- " , PORT ) ; 
}) 