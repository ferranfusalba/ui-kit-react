import React from "react";
import styled from "styled-components";

const StyledLayoutCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LayoutCenter = ({ children }: { children: React.ReactNode }) => {
  return <StyledLayoutCenter>{children}</StyledLayoutCenter>;
};

export default LayoutCenter;
