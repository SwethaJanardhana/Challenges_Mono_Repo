import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";
import CommentForm from "../CommentForm";
import ProductForm from "../ProductForm";
import { useState } from "react";
import { StyledButtonIcon } from "@/components/Button/Button.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditProduct, setIsEditProduct] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleDeleteProduct() {
    const check = confirm("Are you sure you want to delete this product?");
    if (check) {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.push("/");
      }
    }
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    console.log(response);
    if (response.ok) {
      mutate();
    }
  }

  async function handleCommentDelete(commentId) {
    const response = await fetch(
      `/api/reviews?reviewId=${commentId}&productId=${id}`,
      {
        method: "DELETE",
      }
    );

    console.log("response : ", response);
    if (response.ok) {
      mutate();
    }
  }

  return (
    <ProductCard>
      <StyledButtonIcon
        title="Edit a Product"
        onClick={() => {
          setIsEditProduct(!isEditProduct);
        }}
      >
        <span role="image" aria-label="delete icon">
          ✏️
        </span>
      </StyledButtonIcon>
      &nbsp;&nbsp;&nbsp;
      <StyledButtonIcon
        onClick={handleDeleteProduct}
        title="Delete a Product"
        disabled={isEditProduct}
      >
        <span role="image" aria-label="delete icon">
          ❌
        </span>
      </StyledButtonIcon>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {isEditProduct && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data}
          isEditProduct={true}
        />
      )}
      {!isEditProduct && (
        <>
          <CommentForm />
          <h3>Comments</h3>
          {data.reviews.length > 0 ? (
            <Comments
              reviews={data.reviews}
              onCommentDelete={handleCommentDelete}
            />
          ) : (
            <p>-----</p>
          )}
        </>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
