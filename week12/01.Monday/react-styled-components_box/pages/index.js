import StyledBox from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "@/components/BoxWithClassName/BoxWithClassName";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </StyledDiv>
  );
}
