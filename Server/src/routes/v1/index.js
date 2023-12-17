import express from "express";
import { GeminiProVisionController } from "../../controller/gemini-vision-controller.js";

const router = express.Router();

router.post("/gemini-pro-vision", GeminiProVisionController )


export default router;
