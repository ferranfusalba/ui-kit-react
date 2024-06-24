import ChevronDown from "../../../assets/icons-code/ChevronDown";
import { StyledToggleChevronDown } from "./ToggleChevronDown.styles";

const ToggleChevronDown = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <StyledToggleChevronDown className="section-toggler" onClick={onClick}>
      <ChevronDown className={open ? "open" : ""} />
    </StyledToggleChevronDown>
  );
};

export default ToggleChevronDown;
