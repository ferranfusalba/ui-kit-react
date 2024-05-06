import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  display: flex;
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

    &:not(.expanded) {
      width: 200px;
    }
    
    &.expanded {
      width: 300px;
    }
  }

  main {
    width: calc(100vw - 300px);
  }
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}
`;

export default GlobalStyle;
