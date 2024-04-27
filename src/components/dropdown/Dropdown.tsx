import * as React from "react";
import { StyledDropdown } from "./Dropdown.styles";

const Dropdown = ({
  open,
  trigger,
  menu,
  direction,
}: {
  open: boolean;
  trigger: React.ReactNode;
  menu: Array<React.ReactNode>;
  direction?: string;
}) => {
  return (
    <StyledDropdown className="dropdown-wrapper">
      {trigger}
      {open ? (
        <div className={"dropdown-menu" + " " + direction}>
          {menu.map((menuItem: React.ReactNode, index: number) => (
            <div key={index} className="menu-item">
              {menuItem}
            </div>
          ))}
        </div>
      ) : null}
    </StyledDropdown>
  );
};

export default Dropdown;
