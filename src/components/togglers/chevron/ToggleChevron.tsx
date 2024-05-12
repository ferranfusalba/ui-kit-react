import ChevronDown from "../../../assets/icons-code/ChevronDown";
import { StyledToggleChevron } from "./ToggleChevron.styles";

const ToggleChevron = ({ active }: { active: boolean }) => {
  return (
    <StyledToggleChevron>
      <ChevronDown className={active ? "active" : ""} />
    </StyledToggleChevron>
  );
};

export default ToggleChevron;
