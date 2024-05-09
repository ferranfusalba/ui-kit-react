import { Link } from "@tanstack/react-router";
import { StyledNavbarItem } from "./NavbarItem.styles";

const NavbarItem = ({
  icon,
  title,
  to,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  to: string;
  className: string;
}) => {
  return (
    <StyledNavbarItem className={className}>
      <Link to={to}>
        <aside className="material-symbols-outlined">{icon}</aside>
        <span>{title}</span>
      </Link>
    </StyledNavbarItem>
  );
};

export default NavbarItem;
