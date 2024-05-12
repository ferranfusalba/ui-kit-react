import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: 1px solid red;
  height: 100vh;
  width: 100%;

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
`;
