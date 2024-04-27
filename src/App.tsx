import Dropdown from "../src/components/dropdown/Dropdown";
import GlobalStyle from "./globalStyles";
import ArrowLeft from "../src/assets/icons/arrow--left.svg";
import ArrowUp from "../src/assets/icons/arrow--up.svg";
import ArrowDown from "../src/assets/icons/arrow--down.svg";
import ArrowRight from "../src/assets/icons/arrow--right.svg";

function App() {
  const menuItems = [
    {
      value: "securityOptions",
      label: "Security Options",
    },
    {
      value: "googleAccounts",
      label: "Google Accounts",
    },
  ];

  return (
    <>
      <GlobalStyle />

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
    </>
  );
}

export default App;
