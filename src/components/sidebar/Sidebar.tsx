import { StyledSidebar, StyledSidebarItemSection } from "./Sidebar.styles";
import { useCoreStore } from "../../store/store";
import Switch from "../inputs/switch/Switch";
import React from "react";
import useDataTheme from "../../hooks/use-data-theme";
import classNames from "classnames";
import SidebarSectionTitleToggler from "./section-title/section-title-toggler/SidebarSectionTitleToggler";
import SidebarSectionTitleSeparator from "./section-title/section-title-separator/SidebarSectionTitleSeparator";
import SidebarItem from "./item/SidebarItem";
import SidebarSubmenu from "./submenu/SidebarSubmenu";
import Home from "../../assets/icons/home.svg";
import Dropdown from "../../assets/icons/dropdown.svg";
import Input from "../../assets/icons/input.svg";
import Wysiwyg from "../../assets/icons/wysiwyg.svg";
import Tooltip from "../../assets/icons/tooltip.svg";

const Sidebar = () => {
  const isSidebarExpanded = useCoreStore((state) => state.isSidebarExpanded);
  const setSidebarExpanded = useCoreStore((state) => state.setSidebarExpanded);

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
    <StyledSidebar className={classNames({ collapsed: !isSidebarExpanded })}>
      <SidebarSectionTitleToggler
        title="UI Kit React"
        onClick={() => setSidebarExpanded(!isSidebarExpanded)}
        collapsed={!isSidebarExpanded}
        visible={true}
      />
      <StyledSidebarItemSection>
        <SidebarItem title="Home" icon={Home} to="/" active={isHome} visible />

        <SidebarSubmenu
          title="Dropdowns"
          icon={Dropdown}
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

        <SidebarSubmenu
          title="Inputs"
          icon={Input}
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

        <SidebarSubmenu
          title="Modals"
          icon={Wysiwyg}
          active={isCurrentPath("/modals")}
          collapsed={!isSidebarExpanded}
          items={[
            {
              title: "Modal dialog 1",
              to: "/modals/1",
              active: isCurrentPath("/modals/1"),
            },
            {
              title: "Modal dialog 2",
              to: "/modals/2",
              active: isCurrentPath("/modals/2"),
            },
          ]}
        />

        <SidebarSubmenu
          title="Tooltip"
          icon={Tooltip}
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

      <SidebarItem
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
    </StyledSidebar>
  );
};
export default Sidebar;
