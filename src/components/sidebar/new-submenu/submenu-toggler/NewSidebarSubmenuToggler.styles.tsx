import styled from "styled-components";
import {
  StyledNewSidebarItemContent,
  StyledNewSidebarItemCore,
} from "../../new-item/NewSidebarItem.styles";

export const StyledNewSidebarSubmenuToggler = styled(StyledNewSidebarItemCore)`
  &.active:not(.open) {
    div.aside-indicator {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: var(--color-corporative-blue-opticks);
    }
  }

  &.open:hover,
  &:not(.active):hover {
    div.aside-indicator {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      background-color: var(--color-bw-white);
    }
  }

  &:hover {
    div.items-icon-title-caret {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: var(--color-bw-white);
      cursor: pointer;
    }
  }
`;

export const StyledNewSidebarSubmenuTogglerContent = styled(
  StyledNewSidebarItemContent
)`
  justify-content: space-between;

  div.items-icon-title {
    display: flex;
    align-items: center;
  }

  div.item-caret {
    padding-right: 12px;

    svg {
      transition: 0.3s ease-in-out;
    }

    &.open {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;
