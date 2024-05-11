import { Link } from "@tanstack/react-router";
import { StyledNavbarItem } from "./NavbarItem.styles";
import ListItem from "../../list-item/ListItem";

const NavbarItem = ({
  icon,
  title,
  to,
  className,
}: {
  icon: string;
  title: string;
  to: string;
  className: string;
}) => {
  return (
    <StyledNavbarItem>
      <Link to={to}>
        <ListItem className={className} icon={icon} title={title}></ListItem>
      </Link>
    </StyledNavbarItem>
  );
};

export default NavbarItem;
