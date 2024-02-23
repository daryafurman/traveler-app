import dbConnect from "../../../../db/connection";
import Tour from "../../../../db/schemas/tour";

export default async function handler(req, res) {
  await dbConnect();

  const { country, city } = req.query;

  try {
    if (!country && !city) {
      const countries = await Tour.distinct("country");
      const cities = await Tour.distinct("city");
      res.status(200).json({ countries, cities });
    } else {
      let query = {};
      if (country) {
        query.country = country;
      }
      if (city) {
        query.city = city;
      }

      const tours = await Tour.find(query);

      if (tours.length > 0) {
        res.status(200).json(tours);
      } else {
        res.status(404).json({ message: "No tours found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
