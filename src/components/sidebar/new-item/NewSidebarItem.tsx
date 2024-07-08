import React from "react";
import { Link } from "@tanstack/react-router";
import classNames from "classnames";
import {
  StyledNewSidebarItem,
  StyledNewSidebarItemContent,
} from "./NewSidebarItem.styles";
import { NewSidebarItemProps } from "./NewSidebarItem.types";

const NewSidebarItem = ({
  title,
  icon,
  to,
  active,
  isSubmenu = false,
  id,
  visible = undefined,
}: NewSidebarItemProps) => {
  if (visible === false) {
    return null;
  }

  return (
    <StyledNewSidebarItem className={classNames({ active: active })} id={id}>
      <div className="aside-indicator" />
      <Link to={to}>
        <StyledNewSidebarItemContent className="items-icon-title">
          <div
            className={classNames("item-icon", {
              "sensor-variation":
                title === "Sensor JS" || title === "Sensor S2S",
            })}
          >
            {icon}
          </div>
          <span
            className={classNames("item-title", {
              "is-submenu-child": isSubmenu,
            })}
          >
            {title}
          </span>
        </StyledNewSidebarItemContent>
      </Link>
    </StyledNewSidebarItem>
  );
};

export default NewSidebarItem;
