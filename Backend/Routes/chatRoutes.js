import { Router } from "express";
import { createChat, fetchChatsOfLoggedInUser } from "../src/Controllers/chat.controller.js";
import { verifyJwt } from "../Middleware/auth.middleware.js";
const router = Router();

router.route("/createchat").post(verifyJwt,createChat);
router.route("/fetchchat").get(verifyJwt,fetchChatsOfLoggedInUser)
export default router;