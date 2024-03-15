import styled from "styled-components";
import Delete from "@/public/assets/delete.svg";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: larger;

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: inherit;
  }
`;

export const StyledDelete = styled(Delete)`
  width: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-items: center;
  width: 100%;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: var(--color-water-10);
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  gap: 2rem;
  padding: 0.5rem;
  justify-content: space-between;
`;
