import {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownMenu,
  StyledDropdownMenuItem,
} from "./DropdownSingleOption.styles";
import useOpenDropdown from "../../../hooks/use-open-dropdown";
import OutsideClickWrapper from "../../../hooks/use-outside-click-wrapper";
import { useCounterStore } from "../../../store/store";
import ChevronDown from "../../../assets/icons/chevron--down.svg";
import classNames from "classnames";
import { useState } from "react";

interface MenuItem {
  label: string;
  value: string;
  setFunction: (value?: string) => void;
}

const DropdownSingleOption = ({
  triggerButton,
  placeholder,
  direction = "bottom",
  alignment,
  height,
  menuItems,
  disabled = false,
}: {
  triggerButton?: React.ReactNode;
  placeholder?: string;
  direction?: string;
  alignment?: string;
  height?: string;
  menuItems: Array<MenuItem>;
  disabled?: boolean;
}) => {
  // const setSelectedValue = useCounterStore((state) => state.setSelectedValue);
  const store = useCounterStore((state) => state);
  console.log("zustand store", store);
  const [localLabel, setLocalLabel] = useState("");

  const { open, setOpen, handleOpen } = useOpenDropdown();

  const handleClickOutside = () => {
    setOpen(false);
  };

  const handleOption = (item: MenuItem) => {
    item.setFunction();
    setLocalLabel(item.label);
    handleOpen();
  };

  return (
    <OutsideClickWrapper callback={handleClickOutside}>
      <StyledDropdown>
        <StyledDropdownButton
          onClick={handleOpen}
          disabled={disabled}
          className={classNames(direction, { open: open })}
        >
          <span>
            {placeholder ? (localLabel ? localLabel : placeholder) : null}
          </span>

          {triggerButton ? triggerButton : null}
          <img
            src={ChevronDown}
            className={classNames("button", direction, { open: open })}
          ></img>
        </StyledDropdownButton>

        {open ? (
          <StyledDropdownMenu
            height={height}
            className={classNames("dropdown-menu", direction, alignment, {
              [`height-${height}`]: height,
            })}
          >
            {menuItems.map((menu, index) => (
              <StyledDropdownMenuItem
                onClick={() => handleOption(menu)}
                key={index}
                className="menu-item"
              >
                {menu.label}
              </StyledDropdownMenuItem>
            ))}
          </StyledDropdownMenu>
        ) : null}
      </StyledDropdown>
    </OutsideClickWrapper>
  );
};

export default DropdownSingleOption;
