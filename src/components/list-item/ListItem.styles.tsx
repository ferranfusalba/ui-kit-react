import styled from "styled-components";

export const StyledListItem = styled.div`
  display: flex;

  &:not(.navbar-expanded) {
    span {
      display: none;
    }
  }
`;
