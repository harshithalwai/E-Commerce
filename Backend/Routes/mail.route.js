import express from "express";
import subscribeMail from "../controller/Mails.js";
const router = express.Router();

router.route("/send-subscribeMail").post(subscribeMail);

export default router;