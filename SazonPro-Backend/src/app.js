import express from "express";
import "dotenv/config";
import { dbConecction } from "./config/bdConecction.js";
import { router } from "./routes/index.js";
import cors from "cors";
import multer from "multer";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "90mb" }));
app.use(multer().any({ limit: "90mb" }));
app.use(router);
dbConecction();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})