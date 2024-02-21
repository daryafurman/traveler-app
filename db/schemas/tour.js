import mongoose from "mongoose";

const { Schema, model } = mongoose;

const tourSchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  photos: [{ type: String, required: true }],
  description: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
});

const Tour = model("Tour", tourSchema);

export default Tour;
