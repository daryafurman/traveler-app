import dbConnect from "../../../../db/connection.js";
import Tour from "../../../../db/schemas/tour.js";

export default async function handler(req, res) {
  await dbConnect();

  const { country, city, photosOnly } = req.query;

  let query = {};
  if (country) query.country = country;
  if (city) query.city = city;

  try {
    const tours = await Tour.find(query);
    if (photosOnly === "true") {
      const photos = tours.map((tour) => tour.photos).flat();
      res.status(200).json(photos);
    } else {
      res.status(200).json(tours);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
  if (req.method === "POST") {
    try {
      const tour = new Tour(req.body);
      const createdTour = await tour.save();
      return res.status(201).json({ id: createdTour._id });
    } catch (error) {
      return res.status(400).json({ error: "Failed to create the tour" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
