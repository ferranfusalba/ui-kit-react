import { StyledSidebarSectionTitle } from "./SidebarSectionTitle.styles";

const SidebarSidebarTitle = ({
  title,
  isSidebarExpanded,
}: {
  title: string;
  isSidebarExpanded?: boolean;
}) => {
  return (
    <StyledSidebarSectionTitle>
      {isSidebarExpanded ? title : "-"}
    </StyledSidebarSectionTitle>
  );
};

export default SidebarSidebarTitle;
