import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/mail.route.js";
dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())


app.use("/api/v1/mail", mailRouter);

export default app;