import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { reviewId, productId } = request.query;

  console.log("URl review id and product id : ", reviewId, productId);

  if (request.method === "POST") {
    try {
      const productId = request.body.productId;
      const reviewData = request.body.comment;
      const createdReview = await Review.create(reviewData);
      const reviewId = createdReview._id;
      console.log("reviewId.. : ", reviewId);
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
    try {
      console.log(productId);

      const product = await Product.findById(productId).populate("reviews");
      if (!product) {
        return response.status(404).json({ status: "Product not found" });
      }
      product.reviews.pop(reviewId);
      await product.save();

      if (!product) {
        return response.status(404).json({ status: "Product not found" });
      }

      await Review.findByIdAndDelete(reviewId);

      response.status(200).json({ status: "Comment deleted successfully." });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  /* if (request.method === "PUT") {
    const reviewId = request.body.reviewId;
    const productId = request.body.productId;

    console.log("review Id : ", typeof reviewId, reviewId);
    console.log("product Id : ", typeof productId, productId);

    const product = await Product.findByIdAndUpdate(productId, {
      $pop: { reviews: reviewId },
    });
    if (!product) {
      return response.status(404).json({ status: "Product not found" });
    }

    await Review.findByIdAndDelete(reviewId);

    response.status(200).json({ status: "Comment deleted successfully." });
  } */
}
