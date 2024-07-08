import styled from "styled-components";

export const StyledNewSidebarSubmenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledNewSidebarSubmenuSection = styled.div<{
  $maxHeight: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  max-height: 0;

  &.submenu-open {
    transition: max-height 0.2s ease-in;
    max-height: ${(props) => props.$maxHeight};
  }
`;

export const StyledNewSidebarSubmenuSectionOpenCollapsed = styled.div<{
  $maxHeight: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: ${(props) => props.$maxHeight};

  .items-icon-title {
    padding-right: 20px;
  }
`;

export const StyledNewSidebarSubmenuSectionCollapsed = styled.div<{
  onMouseEnter: (value: React.SetStateAction<boolean>) => void;
  onMouseLeave: (value: React.SetStateAction<boolean>) => void;
}>`
  position: absolute;
  z-index: 9999;
  top: -10px;
  left: 56px;
  background: var(--color-bw-clear-blue-grey);

  .submenu-collapsed-open {
    margin: 10px;
    width: max-content;
    background: var(--color-bw-clear-blue-grey);
  }
`;
