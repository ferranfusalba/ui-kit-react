import { createLazyFileRoute } from "@tanstack/react-router";
import MaterialGetStarted from "../components/material-get-started/MaterialGetStarted";

export const Route = createLazyFileRoute("/button")({
  component: Button,
});

function Button() {
  return (
    <div>
      <MaterialGetStarted></MaterialGetStarted>
    </div>
  );
}
