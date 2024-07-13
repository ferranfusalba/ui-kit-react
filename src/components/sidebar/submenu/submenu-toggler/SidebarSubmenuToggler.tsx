import React from "react";
import classNames from "classnames";
import CaretDownIcon from "../../../../assets/icons-code/CaretDownIcon";
import {
  StyledSidebarSubmenuToggler,
  StyledSidebarSubmenuTogglerContent,
} from "./SidebarSubmenuToggler.styles";

const SidebarSubmenuToggler = ({
  title,
  active,
  icon,
  onClick,
  onMouseEnter,
  onMouseLeave,
  open,
}: {
  title: string;
  active: boolean;
  icon: string;
  onClick: (event: React.BaseSyntheticEvent) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  open: boolean;
}) => {
  return (
    <StyledSidebarSubmenuToggler
      className={classNames({ open: open }, { active: active })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="aside-indicator" />
      <StyledSidebarSubmenuTogglerContent className="items-icon-title-caret">
        <div className="items-icon-title">
          <img src={icon} className="item-icon"></img>
          <span className="item-title">{title}</span>
        </div>
        <div className={classNames("item-caret", { open })}>
          <CaretDownIcon />
        </div>
      </StyledSidebarSubmenuTogglerContent>
    </StyledSidebarSubmenuToggler>
  );
};

export default SidebarSubmenuToggler;
