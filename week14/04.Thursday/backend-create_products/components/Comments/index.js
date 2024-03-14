export default function Comments({ reviews }) {
  function handleRating(rating) {
    let ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push("⭐️");
    }
    return ratingArray;
  }
  return (
    <>
      <h3>Comments</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>{review.text}</p>
            <p>Rating:{handleRating(review.rating)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
