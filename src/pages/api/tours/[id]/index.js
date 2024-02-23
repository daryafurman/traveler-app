import dbConnect from "../../../../../db/connection";
import Tour from "../../../../../db/schemas/tour";

export default async function handler(request, response) {
  const { id } = request.query;
  console.log(id);
  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "GET") {
    const foundTour = await Tour.findById(id);
    if (!foundTour) {
      return response.status(404).json({ message: "Tour not found" });
    }
    return response.status(200).json({ tour: foundTour });
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
