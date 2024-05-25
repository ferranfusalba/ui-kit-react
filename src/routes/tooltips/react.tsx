import { createFileRoute } from "@tanstack/react-router";
import TooltipReact from "../../components/tooltips/tooltip-react/TooltipReact";

export const Route = createFileRoute("/tooltips/react")({
  component: TooltipReactPage,
});

function TooltipReactPage() {
  return (
    <div>
      Tooltip React
      <TooltipReact />
    </div>
  );
}
