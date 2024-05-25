import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-family: "Roboto";
    font-size: 14px;
    border: none;
    transition: all 0.15s ease-in-out;
    height: 32px;
    padding: 4px 10px;
    width: 160px; // TODO: Review text-overflow behavior
    // min-width: 160px;

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:not(:disabled) {
      cursor: pointer;
      background-color: white;
      color: darkblue;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: lightgrey;
      color: grey;
    }

    &.open {
      &.direction-top {
        border-radius: 0 0 6px 6px;
        // box-shadow: 0px -6px 8px 0px #00000019;
        box-shadow: 0px 6px 8px 0px #00000019;
      }

      &.direction-bottom {
        border-radius: 6px 6px 0 0;
        box-shadow: 0px 6px 8px 0px #00000019;
      }

      &.direction-left {
        border-radius: 0 6px 6px 0;
        box-shadow: 0px 6px 8px 0px #00000019;
      }

      &.direction-right {
        border-radius: 6px 0 0 6px;
        box-shadow: 0px 6px 8px 0px #00000019;
      }
    }

    &:not(.open) {
      border-radius: 6px;
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

    // TODO: Review optional
    &.direction-right {
      display: flex;
      justify-content: end;
      // width: 100%;
    }
  }

  .dropdown-menu {
    position: absolute;
    background-color: lightgrey;
    min-width: 160px;
    z-index: 1;
    display: flex;
    flex-direction: column;

    .menu-item {
      background-color: white;
      color: black;
      border: none;
      width: 100%;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        background-color: darkblue;
        color: white;
      }
    }

    &.direction-bottom {
      top: 100%;
      border-radius: 0 0 6px 6px;
      box-shadow: 0px 6px 8px 0px #00000019;

      .menu-item:last-child {
        border-radius: 0 0 6px 6px;
      }
    }

    &.direction-top {
      bottom: 100%; // TODO: Fix spacing - bottom from 88% ?
      border-radius: 6px 6px 0 0;
      box-shadow: 0px -6px 8px 0px #00000019;

      .menu-item:first-child {
        border-radius: 6px 6px 0 0;
      }
    }

    &.direction-left {
      right: 100%;
      top: 0%;
      border-radius: 6px 0 0 6px;
      box-shadow: 0px 6px 8px 0px #00000019;

      .menu-item {
        justify-content: end;

        &:first-child {
          border-radius: 6px 0 0 0;
        }

        &:last-child {
          border-radius: 0 0 0 6px;
        }
      }

      // TODO: Review optional
      text-align: end;
    }

    &.direction-right {
      left: 100%;
      top: 0;
      border-radius: 0 6px 6px 0;
      box-shadow: 0px 6px 8px 0px #00000019;

      .menu-item {
        justify-content: start;

        &:first-child {
          border-radius: 0 6px 0 0;
        }

        &:last-child {
          border-radius: 0 0 6px 0;
        }
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
