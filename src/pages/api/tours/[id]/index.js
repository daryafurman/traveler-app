import dbConnect from "../../../../../db/connection";
import Tour from "../../../../../db/schemas/tour";

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const foundTour = await Tour.findById(id);
        if (!foundTour) {
          return res.status(404).json({ message: "Tour not found" });
        }
        return res.status(200).json({ tour: foundTour });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Server error", error: error.message });
      }

    case "PUT":
      try {
        const tourUpdates = req.body;
        const updatedTour = await Tour.findByIdAndUpdate(id, tourUpdates, {
          new: true,
          runValidators: true,
        });
        if (!updatedTour) {
          return res.status(404).json({ message: "Tour not found" });
        }
        return res.status(200).json(updatedTour);
      } catch (error) {
        return res
          .status(400)
          .json({ message: "Failed to update the tour", error: error.message });
      }

    case "DELETE":
      try {
        const deletedTour = await Tour.findByIdAndDelete(id);
        if (!deletedTour) {
          return res.status(404).json({ message: "Tour not found" });
        }
        return res.status(204).json({});
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Failed to delete the tour", error: error.message });
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
