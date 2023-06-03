import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema =  Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    companyAddress: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("userModel", userSchema);
