import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";


const app = express();

app.get("/hello", (req, res) => {
    return res.json({ "hello" : "World"})
});

const start = async () => {
    
    app.listen(8000, ()=>{
        console.log("Sever is running on port 8000");
    })
}

start();
