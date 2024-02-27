import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  image: String,
  role: { type: String, default: "user" },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
