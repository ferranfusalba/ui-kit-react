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
      border-radius: 6px;
      background-color: lightgrey;
      width: 28px;
      height: 28px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
