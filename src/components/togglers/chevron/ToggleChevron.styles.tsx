import styled from "styled-components";

export const StyledToggleChevron = styled.div`
  height: 24px; // TODO: Check this
  svg {
    transition: 0.3s ease-in-out;

    &.active {
      transform: rotate(180deg);
    }
  }
`;
