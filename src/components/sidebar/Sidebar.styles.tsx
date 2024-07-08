import styled from "styled-components";

export const StyledSidebars = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNewSidebar = styled.nav`
  transition: max-width, left, right, 0.3s;
  width: 240px;
  max-width: 240px;
  // height: 100%;
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

// -- //

export const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  &.dark {
    box-shadow: inset -38px 0px 37px -35px rgba(20, 20, 20, 1);
  }

  &.light {
    box-shadow: inset -38px 0px 37px -35px rgba(166, 166, 166, 1);
  }

  & > *:nth-child(1) {
    display: flex;
    justify-content: space-between;

    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      width: 24px;
      height: 24px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &:not(.sidebar-expanded) {
    span.section-title {
      display: none;
    }
    div.section-toggler {
      display: none;
    }
  }
`;
