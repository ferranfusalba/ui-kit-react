import { createLazyFileRoute } from "@tanstack/react-router";
import TooltipCSS from "../components/tooltips/tooltip-css/TooltipCSS";

export const Route = createLazyFileRoute("/tooltip-css")({
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
