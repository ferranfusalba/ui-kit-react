import styled from "styled-components";
import { HandleOnClick } from "./IconButton";

export const StyledIconButton = styled.button<{
  onClick?: HandleOnClick;
}>`
  display: grid;

  &:not(.disabled) {
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;

    #icon-fill {
      fill: var(--color-bw-light-blue-grey);
    }

    #icon-stroke {
      stroke: var(--color-bw-light-blue-grey);
    }

    &:hover {
      #icon-fill {
        fill: var(--color-bw-light-blue-grey);
      }

      #icon-stroke {
        stroke: var(--color-bw-light-blue-grey);
      }
    }
  }
`;
