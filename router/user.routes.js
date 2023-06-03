import express from "express";
import {createUserDetails}  from "../controller/user.controller.js";

const router = express.Router();

router.post("/userCreate",createUserDetails)

export default router;

