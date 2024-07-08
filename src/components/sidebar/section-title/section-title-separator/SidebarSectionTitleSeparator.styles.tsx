import styled from "styled-components";
import { StyledSidebarSectionTitleCore } from "../SidebarSectionTitle.styles";

export const StyledSidebarSectionTitleSeparator = styled(
  StyledSidebarSectionTitleCore
)`
  span.section-separator {
    opacity: 0;
    width: 0;

    hr {
      border: none;
      width: 0;
    }
  }

  &.collapsed {
    margin-right: 8px;

    div.item-caret {
      display: none;
    }

    span.section-separator {
      opacity: 1;
      transition: opacity 0.5s 0.7s;
      width: 100%;

      hr {
        transition: width 0.5s 0.7s;
        border: 1px solid var(--color-bw-white);
        width: 90%;
      }
    }
  }
`;
