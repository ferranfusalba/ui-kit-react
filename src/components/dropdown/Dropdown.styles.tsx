import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;

  .dropdown-menu {
    position: absolute;
    border: 1px solid grey;
    background-color: lightgrey;
    width: 150px;
    z-index: 1;
    display: flex;
    flex-direction: column;

    .menu-item {
      width: max-content;
    }

    &.direction-bottom {
      top: 100%;
    }

    &.direction-top {
      bottom: 100%; // TODO: Fix spacing - bottom from 88% ?
    }

    &.direction-left {
      right: 100%;
      top: 0%;
      align-items: end;
    }

    &.direction-right {
      left: 100%;
      top: 0;
      // align-items: start;
    }

    &.alignment-bottom {
      // top: -100%;
      top: unset;
      transform: translateY(-100%);
    }

    &.alignment-center-y {
      top: -50%;
      /* top: unset;
      transform: translateY(-50%); */
    }

    &.alignment-top {
      top: 0;
      /* top: unset;
      transform: translateY(0%); */
    }

    &.alignment-left {
      left: 0;
      // align-items: start;
    }

    &.alignment-center-x {
      left: 50%;
      transform: translate(-50%, 0%);
      align-items: center;
    }

    &.alignment-right {
      right: 0;
      align-items: end;
    }
  }
`;
