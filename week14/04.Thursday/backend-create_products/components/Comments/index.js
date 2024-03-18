import {
  StyledList,
  StyledListItem,
} from "@/components/Comments/Comments.styled";

import { StyledButtonIcon } from "@/components/Button/Button.styled";

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
              <StyledButtonIcon onClick={() => onCommentDelete(review._id)}>
                <span role="image" aria-label="delete a comment">
                  ❌
                </span>
              </StyledButtonIcon>
            </span>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
