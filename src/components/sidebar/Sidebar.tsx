import {
  StyledNewSidebar,
  StyledSidebar,
  StyledSidebarItemSection,
  StyledSidebars,
} from "./Sidebar.styles";
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
import NewSidebarItem from "./new-item/NewSidebarItem";
import NewSidebarSubmenu from "./new-submenu/NewSidebarSubmenu";
import CaretDownIcon from "../../assets/icons-code/CaretDownIcon";

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

  const isCurrentPath = (path: string): boolean =>
    window.location.pathname.includes(path);
  const isHome = window.location.pathname === "/";

  return (
    <StyledSidebars>
      <StyledNewSidebar
        className={classNames({ collapsed: !isSidebarExpanded })}
      >
        <SidebarSectionTitleToggler
          title="UI Kit React"
          onClick={() => setSidebarExpanded(!isSidebarExpanded)}
          collapsed={!isSidebarExpanded}
          visible={true}
        />
        <StyledSidebarItemSection>
          <NewSidebarItem
            title="Home"
            // icon={}
            to="/"
            active={isHome}
            visible
          />

          <NewSidebarSubmenu
            title="Dropdowns"
            icon={<CaretDownIcon />}
            active={isCurrentPath("/dropdowns")}
            collapsed={!isSidebarExpanded}
            items={[
              {
                title: "Dropdown (positions)",
                to: "/dropdowns/positions",
                active: isCurrentPath("/dropdowns/positions"),
              },
              {
                title: "Dropdown Single Option",
                to: "/dropdowns/single-option",
                active: isCurrentPath("/dropdowns/single-option"),
              },
              {
                title: "Dropdown Select Option",
                to: "/dropdowns/select-option",
                active: isCurrentPath("/dropdowns/select-option"),
              },
            ]}
          />

          <NewSidebarSubmenu
            title="Inputs"
            icon={<CaretDownIcon />}
            active={isCurrentPath("/inputs")}
            collapsed={!isSidebarExpanded}
            items={[
              {
                title: "Checkbox",
                to: "/inputs/checkbox",
                active: isCurrentPath("/inputs/checkbox"),
              },
              {
                title: "Radio",
                to: "/inputs/radio",
                active: isCurrentPath("/inputs/radio"),
              },
              {
                title: "Switch",
                to: "/inputs/switch",
                active: isCurrentPath("/inputs/switch"),
              },
            ]}
          />

          <NewSidebarSubmenu
            title="Modals"
            icon={<CaretDownIcon />}
            active={isCurrentPath("/modals")}
            collapsed={!isSidebarExpanded}
            items={[
              {
                title: "Modal dialog 1",
                to: "/modal/1",
                active: isCurrentPath("/modal/1"),
              },
              {
                title: "Modal dialog 2",
                to: "/modal/2",
                active: isCurrentPath("/modal/2"),
              },
            ]}
          />

          <NewSidebarSubmenu
            title="Tooltip"
            icon={<CaretDownIcon />}
            active={isCurrentPath("/tooltips")}
            collapsed={!isSidebarExpanded}
            items={[
              {
                title: "React Tooltip",
                to: "/tooltips/react",
                active: isCurrentPath("/tooltips/react"),
              },
              {
                title: "CSS Tooltip",
                to: "/tooltips/css",
                active: isCurrentPath("/tooltips/css"),
              },
              {
                title: "Popover Tooltip",
                to: "/tooltips/popover",
                active: isCurrentPath("/tooltips/popover"),
              },
            ]}
          />

          <SidebarSectionTitleSeparator
            title="Material Web"
            collapsed={!isSidebarExpanded}
          />
        </StyledSidebarItemSection>

        <NewSidebarItem
          title="Button"
          // icon={}
          to="/button"
          active={isCurrentPath("/button")}
          visible
        />

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
      </StyledNewSidebar>

      <hr style={{ width: "100%" }} />

      <StyledSidebar className={classNames(sidebarClassName, theme)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
    </StyledSidebars>
  );
};
export default Sidebar;
