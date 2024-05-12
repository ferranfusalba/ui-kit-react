import styled from "styled-components";

export const StyledModal2 = styled.div`
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
      width: calc(100vw - 100px);
      height: calc(100vh - 100px);
    }
  }
`;
