import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userModel = Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  companyAddress: { type: String, required: true },
  password: { type: String, required: true },
});

export {userModel};