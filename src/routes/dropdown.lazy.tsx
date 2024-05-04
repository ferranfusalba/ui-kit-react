import { createLazyFileRoute } from "@tanstack/react-router";
import ArrowLeft from "../../src/assets/icons/arrow--left.svg";
import ArrowUp from "../../src/assets/icons/arrow--up.svg";
import ArrowDown from "../../src/assets/icons/arrow--down.svg";
import ArrowRight from "../../src/assets/icons/arrow--right.svg";
import { useCounterStore } from "../store/store";
import Dropdown from "../components/dropdowns/absolute-div/Dropdown";
import LayoutCenter from "../styles/layouts/LayoutCenter";

export const Route = createLazyFileRoute("/dropdown")({
  component: DropdownPage,
});

function DropdownPage() {
  const setSelectedValue = useCounterStore((state) => state.setSelectedValue);

  const menuItems = [
    {
      value: "securityOptions",
      label: "Security Options",
      setFunction: () => setSelectedValue("securityOptions"),
    },
    {
      value: "googleAccounts",
      label: "Google Accounts",
      setFunction: () => setSelectedValue("googleAccounts"),
    },
  ];

  return (
    <LayoutCenter>
      <>
        <div className="container">
          <div>Default</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            menuItems={menuItems}
          />
        </div>
        <br />
        <div className="container">
          <div>from Bottom</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            alignment="alignment-bottom"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            alignment="alignment-bottom"
            menuItems={menuItems}
          />
        </div>
        <br />
        <div className="container">
          <div>from Center-Y</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            alignment="alignment-center-y"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            alignment="alignment-center-y"
            menuItems={menuItems}
          />
        </div>
        <br />
        <div className="container">
          <div>frop Top (= d.)</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            alignment="alignment-top"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            alignment="alignment-top"
            menuItems={menuItems}
          />
        </div>
        <br />
        <div className="container">
          <div>from Left (= d.)</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            alignment="alignment-left"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            alignment="alignment-left"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            menuItems={menuItems}
            disabled
          />
        </div>
        <br />
        <div className="container">
          <div>from Center-X</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            alignment="alignment-center-x"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            alignment="alignment-center-x"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            menuItems={menuItems}
            disabled
          />
        </div>
        <br />
        <div className="container">
          <div>from Right</div>
          <Dropdown
            triggerButton="Dropleft"
            direction="direction-left"
            menuItems={menuItems}
            disabled
          />
          <Dropdown
            triggerButton="Dropup"
            direction="direction-top"
            alignment="alignment-right"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="direction-bottom"
            alignment="alignment-right"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropright"
            direction="direction-right"
            menuItems={menuItems}
            disabled
          />
        </div>
        <br />
        <div className="container">
          <div>Default</div>
          <Dropdown
            triggerButton={<img src={ArrowLeft} alt="" />}
            direction="direction-left"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton={<img src={ArrowUp} alt="" />}
            direction="direction-top"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton={<img src={ArrowDown} alt="" />}
            direction="direction-bottom"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton={<img src={ArrowRight} alt="" />}
            direction="direction-right"
            menuItems={menuItems}
          />
        </div>
      </>
    </LayoutCenter>
  );
}
