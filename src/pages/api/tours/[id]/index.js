import dbConnect from "../../../../db/connection.js";
import Tour from "../../../../../db/schemas/tour.js";

export default async function handler(request, response) {
  const { id } = request.query;
  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "GET") {
    const tour = Tour.find((tour) => tour._id.$oid === id);

    if (!tour) {
      return response.status(404).json({ status: "Not found" });
    }
    return response.status(200).json(tour);
  }
}
