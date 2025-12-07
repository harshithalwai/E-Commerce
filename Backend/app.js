import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/mail.route.js";
import connectDB from "./DB/DBconnection.js";
import ApiResponse from "./utils/api-response.js";
import ApiError from "./utils/api-error.js";

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
    try {
        res.status(200).json(new ApiResponse(200, [], "API is running"));
    } catch (error) {
        res.status(500).json(new ApiError(500, null, "Internal Server Error"));
    }
});

export default app;