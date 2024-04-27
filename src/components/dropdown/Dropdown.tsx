import { StyledDropdown } from "./Dropdown.styles";
import useOpenDropdown from "../../hooks/use-open-dropdown";
import OutsideClickWrapper from "../../hooks/use-outside-click-wrapper";
import { useCounterStore } from "../../store/store";

interface MenuItem {
  label: string;
  value: string;
  setFunction: (value: string) => void;
}

const Dropdown = ({
  triggerButton,
  direction = "bottom",
  menuItems,
}: {
  triggerButton: React.ReactNode;
  direction?: string;
  menuItems: Array<MenuItem>;
}) => {
  const setSelectedValue = useCounterStore((state) => state.setSelectedValue);
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
        <button onClick={handleOpen} className="btn">
          {triggerButton}
        </button>
        {open ? (
          <div className={"dropdown-menu" + " " + direction}>
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
