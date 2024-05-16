import { createLazyFileRoute } from "@tanstack/react-router";
import TooltipPopover from "../components/tooltips/tooltip-popover/TooltipPopover";

export const Route = createLazyFileRoute("/tooltip-popover")({
  component: TooltipPopoverPage,
});

function TooltipPopoverPage() {
  return (
    <div>
      Tooltip Popover
      <TooltipPopover />
    </div>
  );
}
