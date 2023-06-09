import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/user.routes.js";
import multer from "multer";

/* 
 Todo - currently i'm not using this... This is for image uploader package 
 Todo - but now use this only for form data in API Platform like Postman
 */
// const upload = multer();

dotenv.config();
const port = process.env.PORT;
const url = process.env.url;

const app = express();
// app.use(upload.array());
app.use(multer().array());

mongoose
  .connect(url)
  .then(() => {
    console.log(`connect successfully : ${url} `);
    app.listen(port, () => console.log(port));
  })
  .catch((err) => {
    console.log(`check Error : ${err}`);
  });

app.get("/", (req, res) => {
  try {
    res.status(201).send({ send: "View get api" });
  } catch (e) {
    console.log(`error here : ${e}`);
  }
  console.log("Start API");
});

app.use(express.json());

app.use("/api", router);
