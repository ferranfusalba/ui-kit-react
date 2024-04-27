import Dropdown from "../src/components/dropdown/Dropdown";
import Dropdown2 from "../src/components/dropdown2/Dropdown2";
import { useState } from "react";
import GlobalStyle from "./globalStyles";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <>
      <GlobalStyle />

      <Dropdown
        open={open}
        trigger={
          <button onClick={handleOpen} className="btn">
            Dropdown
          </button>
        }
        menu={[
          <button onClick={handleMenuOne}>Menu 1</button>,
          <button onClick={handleMenuTwo}>Menu 2</button>,
        ]}
      />
      {open ? <div>Is Open</div> : <div>Is Closed</div>}

      <Dropdown2></Dropdown2>
    </>
  );
}

export default App;
