import { createLazyFileRoute } from "@tanstack/react-router";
import MaterialWebGetStarted from "../components/material-web-get-started/MaterialWebGetStarted";

export const Route = createLazyFileRoute("/button")({
  component: Button,
});

function Button() {
  return (
    <div>
      <MaterialWebGetStarted></MaterialWebGetStarted>
    </div>
  );
}
