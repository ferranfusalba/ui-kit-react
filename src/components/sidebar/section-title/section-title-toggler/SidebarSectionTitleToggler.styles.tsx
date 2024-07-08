import styled from "styled-components";
import { StyledSidebarSectionTitleCore } from "../SidebarSectionTitle.styles";

export const StyledSidebarSectionTitleToggler = styled(
  StyledSidebarSectionTitleCore
)`
  svg {
    transition: 0.3s ease-in-out;
  }

  &.collapsed {
    div.section-expander {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-right: 8px;

      svg {
        transform: rotate(180deg);
      }
    }
  }
`;
