import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleAllLightsOff,
  handleAllLightsOn,
  isAllLightsOffButtonDisabled,
  isAllLightsOnButtonDisabled,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleAllLightsOff}
        disabled={isAllLightsOffButtonDisabled}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleAllLightsOn}
        disabled={isAllLightsOnButtonDisabled}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
