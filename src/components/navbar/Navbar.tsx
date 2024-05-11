import { StyledNavbar } from "./Navbar.styles";
import ChevronLeft from "../../assets/icons/chevron--left.svg";
import ChevronRight from "../../assets/icons/chevron--right.svg";
import { useCoreStore } from "../../store/store";
import NavbarItem from "./item/NavbarItem";
import Switch from "../inputs/switch/Switch";
import NavbarSubMenu from "./sub-menu/NavbarSubMenu";

const Navbar = () => {
  const isNavbarExpanded = useCoreStore((state) => state.isNavbarExpanded);
  const setNavbarExpanded = useCoreStore((state) => state.setNavbarExpanded);
  const navbarClassName = isNavbarExpanded ? "navbar-expanded" : "";

  return (
    <StyledNavbar className={navbarClassName}>
      <div>
        <div></div>

        <button onClick={() => setNavbarExpanded(!isNavbarExpanded)}>
          <img src={isNavbarExpanded ? ChevronLeft : ChevronRight} alt="" />
        </button>
      </div>
      <div>
        <NavbarItem
          icon="home"
          title="Home"
          to="/"
          className={navbarClassName}
        />
        <NavbarItem
          icon="help"
          title="About"
          to="/about"
          className={navbarClassName}
        />
        <NavbarItem
          icon="buttons_alt"
          title="Button"
          to="/button"
          className={navbarClassName}
        />
        <NavbarItem
          icon="wysiwyg"
          title="Modal"
          to="/modal"
          className={navbarClassName}
        />
        <NavbarSubMenu
          icon="dropdown"
          title="Dropdowns"
          className={navbarClassName}
          items={[
            {
              icon: "dropdown",
              title: "Dropdown (positions)",
              to: "/dropdown-positions",
              className: navbarClassName,
            },
            {
              icon: "dropdown",
              title: "Dropdown Single Option",
              to: "/dropdown-single-option",
              className: navbarClassName,
            },
            {
              icon: "dropdown",
              title: "Dropdown Select Option",
              to: "/dropdown-select-option",
              className: navbarClassName,
            },
          ]}
        ></NavbarSubMenu>
        <NavbarSubMenu
          icon="input"
          title="Inputs"
          className={navbarClassName}
          items={[
            {
              icon: "check_box",
              title: "Checkbox",
              to: "/checkbox",
              className: navbarClassName,
            },
            {
              icon: "radio_button_checked",
              title: "Radio",
              to: "/radio",
              className: navbarClassName,
            },
            {
              icon: "switches",
              title: "Switch",
              to: "/switch",
              className: navbarClassName,
            },
          ]}
        ></NavbarSubMenu>
        {isNavbarExpanded && (
          <>
            <p>{import.meta.env.MODE}</p>
            <Switch
              id="mode-toggle"
              htmlFor="mode-toggle"
              label="Dark Mode"
              disabled
              readOnly
            ></Switch>
          </>
        )}
      </div>
    </StyledNavbar>
  );
};
export default Navbar;
