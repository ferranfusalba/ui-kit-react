import { Link, useRouterState } from "@tanstack/react-router";
import { StyledNavbarItem } from "./SidebarItem.styles";
import NavbarAsideActive from "../aside-active/SidebarAsideActive";

const NavbarItem = ({
  icon,
  title,
  to,
  withAside = true,
}: {
  icon: string;
  title: string;
  to?: string;
  withAside?: boolean;
}) => {
  const router = useRouterState();
  const active = to === router.location.pathname;

  return (
    <StyledNavbarItem>
      {withAside ? (
        <NavbarAsideActive
          className={active ? "active" : ""}
        ></NavbarAsideActive>
      ) : null}

      <picture className="material-symbols-outlined">{icon}</picture>
      <Link to={to}>
        <span className="section-title">{title}</span>
      </Link>
    </StyledNavbarItem>
  );
};

export default NavbarItem;
