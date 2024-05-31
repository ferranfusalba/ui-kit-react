import { StyledTooltipPopover } from "./TooltipPopover.styles";

const TooltipPopover = () => {
  return (
    <StyledTooltipPopover>
      <button popoverTarget="tooltip">
        <p aria-hidden="true">?</p>
      </button>
      <div id="tooltip" className="tooltip" popover="">
        <p>Tooltip Content</p>
      </div>
    </StyledTooltipPopover>
  );
};

export default TooltipPopover;
