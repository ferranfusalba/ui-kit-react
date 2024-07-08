import React from "react";
import classNames from "classnames";
import CaretDownIcon from "../../../../assets/icons-code/CaretDownIcon";
import {
  StyledNewSidebarSubmenuToggler,
  StyledNewSidebarSubmenuTogglerContent,
} from "./NewSidebarSubmenuToggler.styles";

const NewSidebarSubmenuToggler = ({
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
  icon: React.ReactNode;
  onClick: (event: React.BaseSyntheticEvent) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  open: boolean;
}) => {
  return (
    <StyledNewSidebarSubmenuToggler
      className={classNames({ open: open }, { active: active })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="aside-indicator" />
      <StyledNewSidebarSubmenuTogglerContent className="items-icon-title-caret">
        <div className="items-icon-title">
          <div className="item-icon">{icon}</div>
          <span className="item-title">{title}</span>
        </div>
        <div className={classNames("item-caret", { open })}>
          <CaretDownIcon />
        </div>
      </StyledNewSidebarSubmenuTogglerContent>
    </StyledNewSidebarSubmenuToggler>
  );
};

export default NewSidebarSubmenuToggler;
