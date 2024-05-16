import { StyledTooltipPopover } from "./TooltipPopover.styles";

const TooltipPopover = () => {
  return (
    <StyledTooltipPopover>
      {/* @ts-ignore: Incorporation of Popover API into React */}
      <button popovertarget="tooltip">
        <p aria-hidden="true">?</p>
      </button>
      {/* @ts-ignore: Incorporation of Popover API into React */}
      <div id="tooltip" className="tooltip" popover>
        <p>Tooltip Content</p>
      </div>
    </StyledTooltipPopover>
  );
};

export default TooltipPopover;
