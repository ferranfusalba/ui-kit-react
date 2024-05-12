import ChevronDown from "../../../assets/icons-code/ChevronDown";
import { StyledToggleChevronDown } from "./ToggleChevronDown.styles";

const ToggleChevronDown = ({ open }: { open: boolean }) => {
  return (
    <StyledToggleChevronDown>
      <ChevronDown className={open ? "open" : ""} />
    </StyledToggleChevronDown>
  );
};

export default ToggleChevronDown;
