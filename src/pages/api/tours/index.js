import dbConnect from "../../../../db/connection.js";
import Tour from "../../../../db/schemas/tour.js";

export default async function handler(req, res) {
  await dbConnect();

  const { country, city } = req.query;

  let query = {};
  if (country) query.country = country;
  if (city) query.city = city;

  const tours = await Tour.find(query);

  res.status(200).json(tours);
}
