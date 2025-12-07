import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/mail.route.js";
import connectDB from "./DB/DBconnection.js";

dotenv.config({
    path: "./.env.development",
});

const app = express();

connectDB();

app.use(express.static("public"));
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))


app.use("/api/v1/mail", mailRouter);

app.get("/", (req, res) => {
    res.send(`Hii buddy`);
});

export default app;