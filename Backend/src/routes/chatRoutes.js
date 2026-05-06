import express from "express"
import { getStreamToken } from "../controller/chatController.js";
import { proctecRoute } from "../middleware/protectRoute.js";

const router = express.Router();
router.get("/token", proctecRoute,getStreamToken)
export default router