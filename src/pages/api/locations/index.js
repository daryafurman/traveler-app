import dbConnect from "../../../../db/connection";
import Tour from "../../../../db/schemas/tour";

export default async function handler(req, res) {
  await dbConnect();

  // Fetch distinct countries and cities
  const countries = await Tour.distinct("country");
  const cities = await Tour.distinct("city");

  res.status(200).json({ countries, cities });
}
