import { createLazyFileRoute } from "@tanstack/react-router";
import ArrowLeft from "../../src/assets/icons/arrow--left.svg";
import ArrowUp from "../../src/assets/icons/arrow--up.svg";
import ArrowDown from "../../src/assets/icons/arrow--down.svg";
import ArrowRight from "../../src/assets/icons/arrow--right.svg";
import { useCounterStore } from "../store/store";
import Dropdown from "../components/dropdown/Dropdown";

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
    <div className="p-2">
      <>
        <div className="container">
          <Dropdown
            triggerButton="Dropleft"
            direction="left"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropup"
            direction="top"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropdown"
            direction="bottom"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton="Dropright"
            direction="right"
            menuItems={menuItems}
          />
        </div>
        <hr />
        <div className="container">
          <Dropdown
            triggerButton={<img src={ArrowLeft} alt="" />}
            direction="left"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton={<img src={ArrowUp} alt="" />}
            direction="top"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton={<img src={ArrowDown} alt="" />}
            direction="bottom"
            menuItems={menuItems}
          />
          <Dropdown
            triggerButton={<img src={ArrowRight} alt="" />}
            direction="right"
            menuItems={menuItems}
          />
        </div>
        <hr />
      </>
    </div>
  );
}
