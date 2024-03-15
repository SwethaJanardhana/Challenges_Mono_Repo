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
      const productId = request.body.productId;
      const reviewData = request.body.comment;
      const createdReview = await Review.create(reviewData);
      const reviewId = createdReview._id;
      const product = await Product.findByIdAndUpdate(productId, {
        $push: { reviews: reviewId },
      });
      if (!product) {
        return response.status(404).json({ status: "Product not found" });
      }

      response.status(201).json({ status: "Review created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    const commentId = request.body.commentId;
    const productId = request.body.productId;
    await Review.findByIdAndDelete(commentId);
    await Product.findByIdAndUpdate(productId, {
      $pop: { reviews: commentId },
    });
    response.status(200).json({ status: "Comment deleted successfully." });
  }
}
