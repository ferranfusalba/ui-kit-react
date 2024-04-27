import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;

  .dropdown-menu {
    position: absolute;
    border: 1px solid grey;
    background-color: lightgrey;
    width: 150px;
    z-index: 1;

    &.bottom {
      top: 100%;
    }

    &.top {
      bottom: 100%;
    }

    &.left {
      right: 100%;
      top: 0%;
    }

    &.right {
      left: 100%;
      top: 0;
    }
  }
`;
