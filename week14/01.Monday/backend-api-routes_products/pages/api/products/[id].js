import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const productById = getProductById(id);
  if (!productById) {
    return response.status(404).json({ status: "404 Not Found." });
  }

  response.status(200).json(productById);
}
