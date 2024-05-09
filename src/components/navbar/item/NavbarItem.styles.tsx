import styled from "styled-components";

export const StyledNavbarItem = styled.div`
  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }

  &:not(.navbar-expanded) {
    span {
      display: none;
    }
  }
`;
