import styled from "styled-components";

export const StyledSidebarSectionTitleCore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 6px; // Simulates aside
  height: 40px;

  span.section-title {
    display: flex;
    align-items: center;
    opacity: 0.6;
    transition: opacity 0.5s 0.7s;
    margin-left: 8px;
    width: 100%;
    max-width: fit-content;
    height: 100%;
    font-size: 14px;
    font-weight: 700;
    font-variant: all-small-caps;
    letter-spacing: 2.4px;
    color: var(--color-corporative-opticks-blue-grey);
  }
`;
