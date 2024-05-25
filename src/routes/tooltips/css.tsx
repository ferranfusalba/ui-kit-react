import { createFileRoute } from "@tanstack/react-router";
import TooltipCSS from "../../components/tooltips/tooltip-css/TooltipCSS";

export const Route = createFileRoute("/tooltips/css")({
  component: TooltipCSSPage,
});

function TooltipCSSPage() {
  return (
    <div>
      Tooltip CSS
      <TooltipCSS />
    </div>
  );
}
