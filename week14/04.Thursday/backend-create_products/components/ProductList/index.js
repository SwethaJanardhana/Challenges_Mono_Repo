import useSWR from "swr";
import {
  StyledHeading,
  StyledList,
  StyledDelete,
  StyledListItem,
  StyledLink,
} from "./ProductList.styled";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <StyledListItem key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
            <StyledDelete />
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
