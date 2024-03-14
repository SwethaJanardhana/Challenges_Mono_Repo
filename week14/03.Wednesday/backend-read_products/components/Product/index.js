import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  function handleRating(rating) {
    let array = [];
    for (let i = 0; i < rating; i++) {
      array.push("❤️ ");
    }
    return array;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <h3>Reviews:</h3>
      {data.reviews.length ? (
        <ul>
          {data.reviews.map((review) => (
            <li key={review._id}>
              <p>
                {review.title} - {review.text}
              </p>
              <p>Rating : {handleRating(review.rating)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
