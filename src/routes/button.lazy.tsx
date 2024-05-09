import { createLazyFileRoute } from "@tanstack/react-router";
import MaterialWebGetStarted from "../components/material-web-get-started/MaterialWebGetStarted";

export const Route = createLazyFileRoute("/button")({
  component: ButtonPage,
});

function ButtonPage() {
  return (
    <div>
      <MaterialWebGetStarted></MaterialWebGetStarted>
    </div>
  );
}
