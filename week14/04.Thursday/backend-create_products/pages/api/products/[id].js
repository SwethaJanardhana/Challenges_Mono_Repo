import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  if (request.method === "POST") {
    try {
      const commentData = request.body;

      await Review.create(commentData);

      response.status(201).json({ status: "Comment created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
