import { useEffect, useState } from "react";
import { StyledNavbarSubMenu } from "./SidebarSubMenu.styles";
import NavbarItem from "../item/SidebarItem";
import ToggleChevronDown from "../../togglers/chevron-down/ToggleChevronDown";
import { useCoreStore } from "../../../store/store";
import NavbarAsideActive from "../aside-active/SidebarAsideActive";
import { useRouterState } from "@tanstack/react-router";

const NavbarMenuItem = ({
  icon,
  title,
  items,
  path,
}: {
  icon: string;
  title: string;
  path: string;
  items: Array<{
    icon: string;
    title: string;
    to: string;
  }>;
}) => {
  const [open, setOpen] = useState(false);
  const isNavbarExpanded = useCoreStore((state) => state.isNavbarExpanded);

  const handleOpen = () => {
    setOpen(!open);
  };

  // Close all submenus when contracting navbar - TODO: Enhance this logic (leave selected submenu open?)
  useEffect(() => {
    if (!isNavbarExpanded) {
      setOpen(false);
    }

    // TODO: Reopen when expanded & is submenu item
    // if(!isNavbarExpanded) {
    //   setOpen(true)
    // }
  }, [isNavbarExpanded]);

  const router = useRouterState();
  const active = router.location.pathname.includes(path);

  return (
    <StyledNavbarSubMenu>
      <div
        className="toggle-section"
        onClick={isNavbarExpanded ? handleOpen : undefined} // TODO: Enhance this logic ?
      >
        <div style={{ display: "flex" }}>
          <NavbarAsideActive
            className={active ? "active" : ""}
          ></NavbarAsideActive>
          <NavbarItem icon={icon} title={title} withAside={false}></NavbarItem>
        </div>

        <ToggleChevronDown
          open={open}
          onClick={!isNavbarExpanded ? handleOpen : undefined} // TODO: Enhance this logic ?
        ></ToggleChevronDown>
      </div>

      <div className="items-section">
        {open
          ? items.map((item) => (
              <NavbarItem
                icon={item.icon}
                title={item.title}
                to={item.to}
                key={item.to}
              />
            ))
          : null}
      </div>
    </StyledNavbarSubMenu>
  );
};

export default NavbarMenuItem;
