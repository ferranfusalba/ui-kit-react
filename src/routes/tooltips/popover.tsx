import { createFileRoute } from "@tanstack/react-router";
import TooltipPopover from "../../components/tooltips/tooltip-popover/TooltipPopover";

export const Route = createFileRoute("/tooltips/popover")({
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
