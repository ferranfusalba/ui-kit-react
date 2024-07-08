import { useEffect, useState } from "react";
import { StyledSidebarSubMenu } from "./SidebarSubMenu.styles";
import SidebarItem from "../item/SidebarItem";
import ToggleChevronDown from "../../togglers/chevron-down/ToggleChevronDown";
import { useCoreStore } from "../../../store/store";
import SidebarAsideActive from "../aside-active/SidebarAsideActive";
import { useRouterState } from "@tanstack/react-router";

const SidebarSubMenu = ({
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
  const isSidebarExpanded = useCoreStore((state) => state.isSidebarExpanded);

  const handleOpen = () => {
    setOpen(!open);
  };

  // Close all submenus when contracting sidebar - TODO: Enhance this logic (leave selected submenu open?)
  useEffect(() => {
    if (!isSidebarExpanded) {
      setOpen(false);
    }

    // TODO: Reopen when expanded & is submenu item
    // if(!isSidebarExpanded) {
    //   setOpen(true)
    // }
  }, [isSidebarExpanded]);

  const router = useRouterState();
  const active = router.location.pathname.includes(path);

  return (
    <StyledSidebarSubMenu>
      <div
        className="toggle-section"
        onClick={isSidebarExpanded ? handleOpen : undefined} // TODO: Enhance this logic ?
      >
        <div style={{ display: "flex" }}>
          <SidebarAsideActive
            className={active ? "active" : ""}
          ></SidebarAsideActive>
          <SidebarItem
            icon={icon}
            title={title}
            withAside={false}
          ></SidebarItem>
        </div>

        <ToggleChevronDown
          open={open}
          onClick={!isSidebarExpanded ? handleOpen : undefined} // TODO: Enhance this logic ?
        ></ToggleChevronDown>
      </div>

      <div className="items-section">
        {open
          ? items.map((item) => (
              <SidebarItem
                icon={item.icon}
                title={item.title}
                to={item.to}
                key={item.to}
              />
            ))
          : null}
      </div>
    </StyledSidebarSubMenu>
  );
};

export default SidebarSubMenu;
