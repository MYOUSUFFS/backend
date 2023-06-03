import express from "express";
import { authUser, createUserDetails } from "../controller/user.controller.js";

const router = express.Router();

router.post("/userCreate", createUserDetails);
router.post("/authUser", authUser);

export default router;
