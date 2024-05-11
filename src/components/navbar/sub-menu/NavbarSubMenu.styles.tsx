import styled from "styled-components";

export const StyledNavbarSubMenu = styled.div`
  .toggle-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    img {
      height: 20px;
      transition: 0.3s ease-in-out;

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .items-section {
    padding-left: 16px;
  }
`;
