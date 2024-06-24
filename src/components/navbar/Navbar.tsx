import { StyledNavbar } from "./Navbar.styles";
import { useCoreStore } from "../../store/store";
import NavbarItem from "./item/NavbarItem";
import Switch from "../inputs/switch/Switch";
import NavbarSubMenu from "./sub-menu/NavbarSubMenu";
import NavbarSectionTitle from "./section-title/NavbarSectionTitle";
import ToggleChevronLeft from "../togglers/chevron-left/ToggleChevronLeft";
import React from "react";
import useDataTheme from "../../hooks/use-data-theme";
import classNames from "classnames";

const Navbar = () => {
  const isNavbarExpanded = useCoreStore((state) => state.isNavbarExpanded);
  const setNavbarExpanded = useCoreStore((state) => state.setNavbarExpanded);
  const navbarClassName = isNavbarExpanded ? "navbar-expanded" : "";
  const theme = useCoreStore((state) => state.theme);

  const { setDarkMode, setLightMode, selectedThemeLS } = useDataTheme();

  if (selectedThemeLS === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e: React.BaseSyntheticEvent) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <StyledNavbar className={classNames(navbarClassName, theme)}>
      <div>
        <NavbarSectionTitle
          title="ui kit react"
          isNavbarExpanded={isNavbarExpanded}
        ></NavbarSectionTitle>
        <button onClick={() => setNavbarExpanded(!isNavbarExpanded)}>
          <ToggleChevronLeft open={!isNavbarExpanded}></ToggleChevronLeft>
        </button>
      </div>
      <div>
        <NavbarItem icon="home" title="Home" to="/" />
        <NavbarSubMenu
          icon="dropdown"
          title="Dropdowns"
          path="/dropdowns"
          items={[
            {
              icon: "dropdown",
              title: "Dropdown (positions)",
              to: "/dropdowns/positions",
            },
            {
              icon: "dropdown",
              title: "Dropdown Single Option",
              to: "/dropdowns/single-option",
            },
            {
              icon: "dropdown",
              title: "Dropdown Select Option",
              to: "/dropdowns/select-option",
            },
          ]}
        ></NavbarSubMenu>
        <NavbarSubMenu
          icon="input"
          title="Inputs"
          path="/inputs"
          items={[
            {
              icon: "check_box",
              title: "Checkbox",
              to: "/inputs/checkbox",
            },
            {
              icon: "radio_button_checked",
              title: "Radio",
              to: "/inputs/radio",
            },
            {
              icon: "switches",
              title: "Switch",
              to: "/inputs/switch",
            },
          ]}
        ></NavbarSubMenu>
        <NavbarSubMenu
          icon="wysiwyg"
          title="Modals"
          path="/modal"
          items={[
            {
              icon: "check_box",
              title: "Modal dialog 1",
              to: "/modal",
            },
            {
              icon: "check_box",
              title: "Modal dialog 2",
              to: "/modal-2",
            },
          ]}
        ></NavbarSubMenu>
        <NavbarSubMenu
          icon="tooltip"
          title="Tooltips"
          path="/tooltips"
          items={[
            {
              icon: "tooltip",
              title: "React Tooltip",
              to: "/tooltips/react",
            },
            {
              icon: "tooltip",
              title: "CSS Tooltip",
              to: "/tooltips/css",
            },
            {
              icon: "tooltip",
              title: "Popover Tooltip",
              to: "/tooltips/popover",
            },
          ]}
        ></NavbarSubMenu>
      </div>
      <div>
        <NavbarSectionTitle
          title="material web"
          isNavbarExpanded={isNavbarExpanded}
        ></NavbarSectionTitle>
      </div>
      <div>
        <NavbarItem icon="buttons_alt" title="Button" to="/button" />
      </div>
      {isNavbarExpanded && (
        <div>
          <p>{import.meta.env.MODE}</p>
          <Switch
            id="mode-toggle"
            htmlFor="mode-toggle"
            label="Dark Mode"
            handleChange={toggleTheme}
            defaultChecked={selectedThemeLS === "dark"}
          ></Switch>
        </div>
      )}
    </StyledNavbar>
  );
};
export default Navbar;
