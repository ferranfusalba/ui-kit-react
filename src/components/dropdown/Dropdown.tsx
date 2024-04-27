import { StyledDropdown } from "./Dropdown.styles";
import useOpenDropdown from "../../hooks/use-open-dropdown";
import OutsideClickWrapper from "../../hooks/use-outside-click-wrapper";

const Dropdown = ({
  triggerButton,
  direction = "bottom",
  menuItems = [{ label: "", value: "" }],
}: {
  triggerButton: React.ReactNode;
  direction?: string;
  menuItems?: Array<{ label: string; value: string }>;
}) => {
  const { open, setOpen, handleOpen } = useOpenDropdown();

  const handleClickOutside = () => {
    setOpen(false);
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
              <button onClick={handleOpen} key={index} className="menu-item">
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
