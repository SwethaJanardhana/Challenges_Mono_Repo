import { StyledForm, StyledLabel, StyledHeading } from "./CommentForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CommentForm() {
  const router = useRouter();
  const { id } = router.query;

  const { mutate } = useSWR(`/api/products/${id}`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);

    const response = await fetch("/api/products/${id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: id, comment: commentData }),
    });
    if (response.ok) {
      mutate();
    }
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a Comment</StyledHeading>
      <StyledLabel htmlFor="comment">
        Title:
        <input type="text" id="title" name="title" required />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Text:
        <input type="text" id="text" name="text" required />
      </StyledLabel>
      <StyledLabel htmlFor="rating">
        Rating:
        <input
          type="number"
          id="rating"
          name="rating"
          required
          max={5}
          min={0}
        />
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
