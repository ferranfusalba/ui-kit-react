import { StyledDropdown } from "./Dropdown.styles";
import useOpenDropdown from "../../../hooks/use-open-dropdown";
import OutsideClickWrapper from "../../../hooks/use-outside-click-wrapper";
import { useCounterStore } from "../../../store/store";
import ChevronDown from "../../../assets/icons/chevron--down.svg";
import classNames from "classnames";

interface MenuItem {
  label: string;
  value: string;
  setFunction: (value?: string) => void;
}

const Dropdown = ({
  triggerButton,
  direction = "bottom",
  alignment,
  menuItems,
  disabled = false,
}: {
  triggerButton: React.ReactNode;
  direction?: string;
  alignment?: string;
  menuItems: Array<MenuItem>;
  disabled?: boolean;
}) => {
  // const setSelectedValue = useCounterStore((state) => state.setSelectedValue);
  const store = useCounterStore((state) => state);
  console.log("zustand store", store);

  const { open, setOpen, handleOpen } = useOpenDropdown();

  const handleClickOutside = () => {
    setOpen(false);
  };

  const handleOption = (item: MenuItem) => {
    item.setFunction();
    handleOpen();
  };

  return (
    <OutsideClickWrapper callback={handleClickOutside}>
      <StyledDropdown>
        <button onClick={handleOpen} disabled={disabled}>
          {triggerButton}
          <img
            src={ChevronDown}
            className={classNames("button", direction, { open: open })}
          ></img>
        </button>
        {open ? (
          <div className={classNames("dropdown-menu", direction, alignment)}>
            {menuItems.map((menu, index) => (
              <button
                onClick={() => handleOption(menu)}
                key={index}
                className="menu-item"
              >
                {menu.label}
              </button>
            ))}
          </div>
        ) : null}
      </StyledDropdown>
    </OutsideClickWrapper>
  );
};

export default Dropdown;
