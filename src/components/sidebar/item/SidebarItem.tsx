import { Link, useRouterState } from "@tanstack/react-router";
import { StyledSidebarItem } from "./SidebarItem.styles";
import SidebarAsideActive from "../aside-active/SidebarAsideActive";

const SidebarItem = ({
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
    <StyledSidebarItem>
      {withAside ? (
        <SidebarAsideActive
          className={active ? "active" : ""}
        ></SidebarAsideActive>
      ) : null}

      <picture className="material-symbols-outlined">{icon}</picture>
      <Link to={to}>
        <span className="section-title">{title}</span>
      </Link>
    </StyledSidebarItem>
  );
};

export default SidebarItem;
