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

  if (request.method === "PUT") {
    const updatedProduct = request.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    response.status(200).json({ status: "Product updated scuuessfully." });
  }

  if (request.method === "DELETE") {
    const product = await Product.findById(id).populate("reviews");
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    if (product.reviews.length > 0) {
      product.reviews.forEach(async (comment) => {
        await Review.findByIdAndDelete(comment._id);
      });
    }
    await Product.findByIdAndDelete(id);
    response.status(200).json({ status: "Product deleted successfully." });
  }
}
