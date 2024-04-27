import styled from "styled-components";

export const StyledDropdown = styled.div`
  .dropdown-wrapper {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    border: 1px solid grey;
    width: 150px;
  }

  // Dropdown (default)
  .bottom {
    top: 100%;
  }

  // Dropup
  .top {
    bottom: 100%;
  }

  // Dropleft
  .left {
    right: 100%;
    top: 0%;
  }

  // Dropright
  .right {
    left: 100%;
    top: 0;
  }

  .dropdown-menu > li {
    margin: 0;
    background-color: white;
  }

  .dropdown-menu > li:hover {
    background-color: lightgray;
  }

  .dropdown-menu > li > button {
    width: 100%;
    height: 100%;
    text-align: left;
    background: none;
    color: black;
    border: none;
    padding: 5px;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }
`;
