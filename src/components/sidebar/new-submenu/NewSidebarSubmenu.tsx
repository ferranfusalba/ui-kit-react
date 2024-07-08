/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect, useRef } from "react";
import NewSidebarItem from "../new-item/NewSidebarItem";
import { NewSidebarItemCoreProps } from "../new-item/NewSidebarItem.types";
import NewSidebarSubmenuToggler from "./submenu-toggler/NewSidebarSubmenuToggler";
import {
  StyledNewSidebarSubmenu,
  StyledNewSidebarSubmenuSection,
  StyledNewSidebarSubmenuSectionCollapsed,
  StyledNewSidebarSubmenuSectionOpenCollapsed,
} from "./NewSidebarSubmenu.styles";

const NewSidebarSubmenu = ({
  title,
  active,
  icon,
  collapsed,
  items,
}: {
  title: string;
  active: boolean;
  icon: React.ReactNode;
  collapsed: boolean;
  items: Array<NewSidebarItemCoreProps>;
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
    <StyledNewSidebarSubmenu>
      {/* Toggler Button */}
      <NewSidebarSubmenuToggler
        title={title}
        active={active}
        icon={icon}
        onClick={!collapsed ? handleOpen : () => {}}
        onMouseEnter={collapsed ? () => setOpenCollapsed(true) : () => {}}
        onMouseLeave={collapsed ? () => setOpenCollapsed(false) : () => {}}
        open={open}
      ></NewSidebarSubmenuToggler>

      {/* Submenu Section when sidebar is collapsed (dropright) */}
      {isSubmenuOpen || openCollapsed ? (
        <StyledNewSidebarSubmenuSectionCollapsed
          onMouseEnter={() => {
            setIsSubmenuOpen(true);
          }}
          onMouseLeave={() => {
            setIsSubmenuOpen(false);
          }}
        >
          {isSubmenuOpen || openCollapsed ? (
            <div className="submenu-collapsed-open">
              <StyledNewSidebarSubmenuSectionOpenCollapsed
                $maxHeight={menuHeight}
              >
                {items.map((item) => (
                  <NewSidebarItem
                    key={item.to}
                    title={item.title}
                    active={item.active}
                    to={item.to}
                    visible={item.visible}
                    isSubmenu
                  />
                ))}
              </StyledNewSidebarSubmenuSectionOpenCollapsed>
            </div>
          ) : null}
        </StyledNewSidebarSubmenuSectionCollapsed>
      ) : null}

      {/* Submenu Section when sidebar is expanded (dropdown) */}
      <StyledNewSidebarSubmenuSection
        ref={menuRef}
        className={open ? "submenu-open" : ""}
        $maxHeight={menuHeight}
      >
        <div style={{ height: "4px" }} />

        {items.map((item) => (
          <NewSidebarItem
            key={item.to}
            title={item.title}
            active={item.active}
            to={item.to}
            visible={item.visible}
            id={item.id}
          />
        ))}
      </StyledNewSidebarSubmenuSection>
    </StyledNewSidebarSubmenu>
  );
};

export default NewSidebarSubmenu;
