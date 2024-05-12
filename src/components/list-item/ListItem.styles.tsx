import styled from "styled-components";

export const StyledListItem = styled.div`
  display: flex;

  &.navbar-expanded {
    @keyframes slideaway2 {
      from {
        opacity: 0;
      }
      to {
        display: flex;
      }
    }

    animation: slideaway2 5s;
  }

  &:not(.navbar-expanded) {
    @keyframes slideaway {
      from {
        display: block;
      }
      to {
        opacity: 0;
      }
    }

    span {
      display: none;
      animation: slideaway 200ms;
    }
  }
`;
