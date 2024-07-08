import { StyledSidebar } from "./Sidebar.styles";
import { useCoreStore } from "../../store/store";
import SidebarItem from "./item/SidebarItem";
import Switch from "../inputs/switch/Switch";
import SidebarSubMenu from "./sub-menu/SidebarSubMenu";
// import ToggleChevronLeft from "../togglers/chevron-left/ToggleChevronLeft";
import React from "react";
import useDataTheme from "../../hooks/use-data-theme";
import classNames from "classnames";
import SidebarSectionTitleToggler from "./section-title/section-title-toggler/SidebarSectionTitleToggler";
import SidebarSectionTitleSeparator from "./section-title/section-title-separator/SidebarSectionTitleSeparator";

const Sidebar = () => {
  const isSidebarExpanded = useCoreStore((state) => state.isSidebarExpanded);
  const setSidebarExpanded = useCoreStore((state) => state.setSidebarExpanded);
  const sidebarClassName = isSidebarExpanded ? "sidebar-expanded" : "";
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
    <StyledSidebar className={classNames(sidebarClassName, theme)}>
      <SidebarSectionTitleToggler
        title="UI Kit React"
        onClick={() => setSidebarExpanded(!isSidebarExpanded)}
        collapsed={!isSidebarExpanded}
        visible={true}
      />

      <div>
        <SidebarItem icon="home" title="Home" to="/" />
        <SidebarSubMenu
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
        ></SidebarSubMenu>
        <SidebarSubMenu
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
        ></SidebarSubMenu>
        <SidebarSubMenu
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
        ></SidebarSubMenu>
        <SidebarSubMenu
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
        ></SidebarSubMenu>
      </div>

      <SidebarSectionTitleSeparator
        title="Material Web"
        collapsed={!isSidebarExpanded}
      />

      <div>
        <SidebarItem icon="buttons_alt" title="Button" to="/button" />
      </div>
      {isSidebarExpanded && (
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
    </StyledSidebar>
  );
};
export default Sidebar;
