import express from "express";
import "dotenv/config";
import { dbConecction } from "./config/bdConecction.js";
import {router} from "./routes/index.js";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
dbConecction();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})