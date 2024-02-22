import mongoose from "mongoose";

const { Schema } = mongoose;

const tourSchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  photos: [{ type: String, required: true }],
  description: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
});

tourSchema.index({ country: 1, city: 1 });

const Tour = mongoose.models.Tour || mongoose.model("Tour", tourSchema);

export default Tour;
