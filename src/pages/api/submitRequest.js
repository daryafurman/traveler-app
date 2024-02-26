import dbConnect from "../../../db/connection";
import Request from "../../../db/schemas/request";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      // Since 'tour' is just a text field, no need to populate.
      const requests = await Request.find({});
      res.status(200).json({ success: true, data: requests });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (method === "POST") {
    // Check for JSON content type
    if (req.headers["content-type"] !== "application/json") {
      return res
        .status(400)
        .json({
          success: false,
          error: "Invalid content type. Please use application/json",
        });
    }

    try {
      const request = await Request.create(req.body);
      res.status(201).json({ success: true, data: request });
    } catch (error) {
      // If error is a Mongoose validation error, you could add more specific error handling here
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
