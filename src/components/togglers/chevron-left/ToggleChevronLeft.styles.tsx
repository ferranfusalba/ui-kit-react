import styled from "styled-components";

export const StyledToggleChevronLeft = styled.div`
  height: 24px; // TODO: Check this
  svg {
    transition: 0.3s ease-in-out;

    &.open {
      transform: rotate(180deg);
    }
  }
`;
