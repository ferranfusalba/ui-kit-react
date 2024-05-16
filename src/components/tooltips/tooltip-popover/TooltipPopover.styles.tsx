import styled from "styled-components";

export const StyledTooltipPopover = styled.div`
  button {
    anchor-name: --anchor;
  }

  div {
    position-anchor: --anchor;
  }

  .tooltip {
    inset-area: bottom;
  }
`;
