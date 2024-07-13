import { Link } from "@tanstack/react-router";
import classNames from "classnames";
import {
  StyledSidebarItem,
  StyledSidebarItemContent,
} from "./SidebarItem.styles";
import { SidebarItemProps } from "./SidebarItem.types";

const SidebarItem = ({
  title,
  icon,
  to,
  active,
  isSubmenu = false,
  id,
  visible = undefined,
}: SidebarItemProps) => {
  if (visible === false) {
    return null;
  }

  return (
    <StyledSidebarItem className={classNames({ active: active })} id={id}>
      <div className="aside-indicator" />
      <Link to={to}>
        <StyledSidebarItemContent className="items-icon-title">
          <div
            className={classNames("item-icon", {
              "sensor-variation":
                title === "Sensor JS" || title === "Sensor S2S",
            })}
          >
            <img src={icon} alt="" />
          </div>
          <span
            className={classNames("item-title", {
              "is-submenu-child": isSubmenu,
            })}
          >
            {title}
          </span>
        </StyledSidebarItemContent>
      </Link>
    </StyledSidebarItem>
  );
};

export default SidebarItem;
