import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
[data-theme="dark"] {
  --body-background: #242424;
  --body-color: rgba(255, 255, 255, 0.87)
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  --body-background: #f0f5f8;
  --body-color: #213547;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

/* * {
  transition: all 0.3s ease-in-out;
} */

body {
  margin: 0;
  display: flex;

  background-color: var(--body-background);
  color: var(--body-color);

  svg {
    fill: var(--body-color);
  }
}

.container {
  display: flex;
  justify-content: space-around;
  width: 100%;

  & > *:nth-child(1) {
    width: 120px;
  }
}

.main-app {
  display: flex;

  nav {
    transition: 0.3s ease-in-out;

    &:not(.navbar-expanded) {
      width: 80px;
    }
    
    &.navbar-expanded {
      width: 270px;
    }
  }

  main {
    &:not(.navbar-expanded) {
      width: calc(100vw - 80px);
    }
    
    &.navbar-expanded {
      width: calc(100vw - 270px);
    }
  }
}
`;

export default GlobalStyle;
