import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;
    }

    img {
      height: 20px;
      transition: 0.3s ease-in-out;

      &.direction-right {
        transform: rotate(-90deg);
        &.open {
          transform: rotate(90deg);
        }
      }

      &.direction-left {
        transform: rotate(90deg);
        &.open {
          transform: rotate(-90deg);
        }
      }

      &.direction-top {
        transform: rotate(180deg);
        &.open {
          transform: none;
        }
      }

      // If direction-bottom is given
      &.direction-bottom,
      // If direction-bottom is not given (default behavior)
      &:not(.direction-top, .direction-left, .direction-right) {
        &.open {
          transform: rotate(-180deg);
        }
      }
    }
  }

  .dropdown-menu {
    position: absolute;
    border: 1px solid grey;
    background-color: lightgrey;
    width: 150px;
    z-index: 1;
    display: flex;
    flex-direction: column;

    .menu-item {
      width: 100%;
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

      .menu-item {
        justify-content: end;
      }
    }

    &.direction-right {
      left: 100%;
      top: 0;

      .menu-item {
        justify-content: start;
      }
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

      .menu-item {
        justify-content: start;
      }
    }

    &.alignment-center-x {
      left: 50%;
      transform: translate(-50%, 0%);
    }

    &.alignment-right {
      right: 0;

      .menu-item {
        justify-content: end;
      }
    }
  }
`;
