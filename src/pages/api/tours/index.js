import dbConnect from "../../../../db/connection.js";
import Tour from "../../../../db/schemas/tour.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const tours = await Tour.find();

      return response.status(200).json(tours);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    response.setHeader("Allow", ["GET"]);
    response.status(405).json({ message: "Method not allowed" });
  }
}
