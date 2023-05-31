import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT;
const url = process.env.url;

const app = express();

mongoose
  .connect(url)
  .then(() => {
    console.log(`connect successfully : ${url} `);
    app.listen(port, () => console.log(port));
  })
  .catch((err) => {
    console.log(`check Error : ${err}`);
  });
