import ChevronLeft from "../../../assets/icons-code/ChevronLeft";
import { StyledToggleChevronLeft } from "./ToggleChevronLeft.styles";

const ToggleChevronLeft = ({ open }: { open: boolean }) => {
  return (
    <StyledToggleChevronLeft>
      <ChevronLeft className={open ? "open" : ""} />
    </StyledToggleChevronLeft>
  );
};

export default ToggleChevronLeft;
