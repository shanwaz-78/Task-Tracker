import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const SignUpSchema = new Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SignUpModel = model("SignUp", SignUpSchema);

export default SignUpModel;
