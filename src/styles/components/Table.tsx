import styled from "styled-components";

export const StyledTable = styled.div`
  position: relative;
  width: 100%;

  th[scope="row"],
  th[scope="col"]:nth-child(1) {
    padding: 0;
    width: 300px;
  }
`;
