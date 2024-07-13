/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect, useRef } from "react";
import SidebarItem from "../item/SidebarItem";
import { SidebarItemCoreProps } from "../item/SidebarItem.types";
import SidebarSubmenuToggler from "./submenu-toggler/SidebarSubmenuToggler";
import {
  StyledSidebarSubmenu,
  StyledSidebarSubmenuSection,
  StyledSidebarSubmenuSectionCollapsed,
  StyledSidebarSubmenuSectionOpenCollapsed,
} from "./SidebarSubmenu.styles";

const SidebarSubmenu = ({
  title,
  active,
  icon,
  collapsed,
  items,
}: {
  title: string;
  active: boolean;
  icon: string;
  collapsed: boolean;
  items: Array<SidebarItemCoreProps>;
}) => {
  const [open, setOpen] = useState(false);
  const [openCollapsed, setOpenCollapsed] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState("0px");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpen = (event: React.BaseSyntheticEvent) => {
    setOpen(!open);
    event.preventDefault();
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(`${menuRef.current.scrollHeight}px`);
    }
  }, [open]);

  const routesItems = items.map((item) => item.to);
  const pathnameIncluded = routesItems.includes(location.pathname);

  useEffect(() => {
    if (collapsed && open) {
      setOpen(!open);
    }
    if (!collapsed && pathnameIncluded) {
      setOpen(true);
    }
    return () => {
      setOpen(open);
    };
  }, [collapsed]);

  return (
    <StyledSidebarSubmenu>
      {/* Toggler Button */}
      <SidebarSubmenuToggler
        title={title}
        active={active}
        icon={icon}
        onClick={!collapsed ? handleOpen : () => {}}
        onMouseEnter={collapsed ? () => setOpenCollapsed(true) : () => {}}
        onMouseLeave={collapsed ? () => setOpenCollapsed(false) : () => {}}
        open={open}
      ></SidebarSubmenuToggler>

      {/* Submenu Section when sidebar is collapsed (dropright) */}
      {isSubmenuOpen || openCollapsed ? (
        <StyledSidebarSubmenuSectionCollapsed
          onMouseEnter={() => {
            setIsSubmenuOpen(true);
          }}
          onMouseLeave={() => {
            setIsSubmenuOpen(false);
          }}
        >
          {isSubmenuOpen || openCollapsed ? (
            <div className="submenu-collapsed-open">
              <StyledSidebarSubmenuSectionOpenCollapsed $maxHeight={menuHeight}>
                {items.map((item) => (
                  <SidebarItem
                    key={item.to}
                    title={item.title}
                    active={item.active}
                    to={item.to}
                    visible={item.visible}
                    isSubmenu
                  />
                ))}
              </StyledSidebarSubmenuSectionOpenCollapsed>
            </div>
          ) : null}
        </StyledSidebarSubmenuSectionCollapsed>
      ) : null}

      {/* Submenu Section when sidebar is expanded (dropdown) */}
      <StyledSidebarSubmenuSection
        ref={menuRef}
        className={open ? "submenu-open" : ""}
        $maxHeight={menuHeight}
      >
        <div style={{ height: "4px" }} />

        {items.map((item) => (
          <SidebarItem
            key={item.to}
            title={item.title}
            active={item.active}
            to={item.to}
            visible={item.visible}
            id={item.id}
          />
        ))}
      </StyledSidebarSubmenuSection>
    </StyledSidebarSubmenu>
  );
};

export default SidebarSubmenu;
