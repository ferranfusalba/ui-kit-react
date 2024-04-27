import { useState } from "react";

const useOpenDropdown = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return {
    open,
    setOpen,
    handleOpen,
  };
};

export default useOpenDropdown;
