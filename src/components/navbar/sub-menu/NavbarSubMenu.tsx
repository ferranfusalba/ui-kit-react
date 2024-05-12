import { useState } from "react";
import { StyledNavbarSubMenu } from "./NavbarSubMenu.styles";
import NavbarItem from "../item/NavbarItem";
import ListItem from "../../list-item/ListItem";
import ToggleChevronDown from "../../togglers/chevron-down/ToggleChevronDown";

const NavbarMenuItem = ({
  icon,
  title,
  items,
  className,
}: {
  icon: string;
  title: string;
  className?: string;
  items: Array<{
    icon: string;
    title: string;
    to: string;
    className: string;
  }>;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledNavbarSubMenu>
      <div className="toggle-section" onClick={handleOpen}>
        <ListItem icon={icon} title={title} className={className}></ListItem>
        <ToggleChevronDown open={open}></ToggleChevronDown>
      </div>
      <div className="items-section">
        {open
          ? items.map((item) => (
              <NavbarItem
                icon={item.icon}
                title={item.title}
                to={item.to}
                className={item.className}
                key={item.to}
              />
            ))
          : null}
      </div>
    </StyledNavbarSubMenu>
  );
};

export default NavbarMenuItem;
