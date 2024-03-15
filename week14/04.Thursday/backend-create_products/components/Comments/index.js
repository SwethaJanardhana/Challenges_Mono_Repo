import {
  StyledList,
  StyledListItem,
  StyledDelete,
} from "@/components/Comments/Comments.styled";

export default function Comments({ reviews, onCommentDelete }) {
  function handleRating(rating) {
    const maxRating = 5;
    let ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push("⭐️");
    }
    for (let i = 0; i < maxRating - rating; i++) {
      ratingArray.push("✩");
    }
    return ratingArray;
  }

  return (
    <>
      <StyledList>
        {reviews.map((review) => (
          <StyledListItem key={review._id}>
            <span>{review.text}</span>
            <span>
              {handleRating(review.rating)}
              <StyledDelete onClick={() => onCommentDelete(review._id)} />
            </span>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
