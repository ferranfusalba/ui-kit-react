import styled from "styled-components";

export const StyledSidebar = styled.nav`
  transition: max-width, left, right, 0.3s;
  width: 240px;
  max-width: 240px;
  height: 100%;
  padding: 10px 6px;
  background: var(--color-bw-clear-blue-grey);

  &.collapsed {
    max-width: 68px;

    span.section-title {
      opacity: 0;
      transition: opacity 0.5s ease-out;
      max-width: 0;
    }

    span.item-title:not(.is-submenu-child) {
      transition: max-width 0.3s;
      max-width: 0;
    }

    div.item-caret {
      display: none;
    }
  }

  span.item-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: max-width 0.3s;
    max-width: 100%;
  }
`;

export const StyledSidebarItemSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
