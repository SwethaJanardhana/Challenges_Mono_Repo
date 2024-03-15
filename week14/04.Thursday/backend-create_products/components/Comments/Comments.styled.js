import { styled } from "styled-components";
import Delete from "@/public/assets/delete.svg";

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-items: center;
  width: 100%;
`;

export const StyledListItem = styled.li`
  display: flex;
  background: var(--color-water-10);
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  justify-content: space-between;
  padding: 0;
  align-items: center;
`;

export const StyledDelete = styled(Delete)`
  width: 1.5rem;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;
