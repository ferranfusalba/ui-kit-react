import styled from "styled-components";

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
