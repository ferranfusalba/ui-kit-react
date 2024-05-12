import { StyledNavbar } from "./Navbar.styles";
import { useCoreStore } from "../../store/store";
import NavbarItem from "./item/NavbarItem";
import Switch from "../inputs/switch/Switch";
import NavbarSubMenu from "./sub-menu/NavbarSubMenu";
import NavbarSectionTitle from "./section-title/NavbarSectionTitle";
import ToggleChevronLeft from "../togglers/chevron-left/ToggleChevronLeft";

const Navbar = () => {
  const isNavbarExpanded = useCoreStore((state) => state.isNavbarExpanded);
  const setNavbarExpanded = useCoreStore((state) => state.setNavbarExpanded);
  const navbarClassName = isNavbarExpanded ? "navbar-expanded" : "";

  return (
    <StyledNavbar className={navbarClassName}>
      <div>
        <NavbarSectionTitle
          title="UI"
          isNavbarExpanded={isNavbarExpanded}
        ></NavbarSectionTitle>
        <button onClick={() => setNavbarExpanded(!isNavbarExpanded)}>
          <ToggleChevronLeft open={!isNavbarExpanded}></ToggleChevronLeft>
        </button>
      </div>
      <div>
        <NavbarItem
          icon="home"
          title="Home"
          to="/"
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
        <NavbarSubMenu
          icon="wysiwyg"
          title="Modals"
          className={navbarClassName}
          items={[
            {
              icon: "check_box",
              title: "Modal dialog 1",
              to: "/modal",
              className: navbarClassName,
            },
            {
              icon: "check_box",
              title: "Modal dialog 2",
              to: "/modal-2",
              className: navbarClassName,
            },
          ]}
        ></NavbarSubMenu>
      </div>
      <div>
        <NavbarSectionTitle
          title="Material Web"
          isNavbarExpanded={isNavbarExpanded}
        ></NavbarSectionTitle>
      </div>
      <div>
        <NavbarItem
          icon="buttons_alt"
          title="Button"
          to="/button"
          className={navbarClassName}
        />
      </div>
      {isNavbarExpanded && (
        <div>
          <p>{import.meta.env.MODE}</p>
          <Switch
            id="mode-toggle"
            htmlFor="mode-toggle"
            label="Dark Mode"
            disabled
            readOnly
          ></Switch>
        </div>
      )}
    </StyledNavbar>
  );
};
export default Navbar;
