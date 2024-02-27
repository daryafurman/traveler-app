import mongoose from "mongoose";

const { Schema } = mongoose;

const requestSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  tour: { type: String, required: true },
  question: { type: String, required: false },
});

const Request =
  mongoose.models.request || mongoose.model("request", requestSchema);

export default Request;
