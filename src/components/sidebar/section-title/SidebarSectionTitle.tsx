import { StyledNavbarSectionTitle } from "./SidebarSectionTitle.styles";

const NavbarSectionTitle = ({
  title,
  isNavbarExpanded,
}: {
  title: string;
  isNavbarExpanded?: boolean;
}) => {
  return (
    <StyledNavbarSectionTitle>
      {isNavbarExpanded ? title : "-"}
    </StyledNavbarSectionTitle>
  );
};

export default NavbarSectionTitle;
