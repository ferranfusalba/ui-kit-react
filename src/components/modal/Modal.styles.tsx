import styled from "styled-components";

export const StyledModal = styled.div`
  dialog {
    transform: translate(0, 0);
    animation: dialogAnimateTop 0.25s ease-in-out;
  }

  @keyframes dialogAnimateTop {
    0% {
      transform: translate(0, -100%);
      opacity: 0;
    }

    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;
