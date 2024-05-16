import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tooltips")({
  component: TooltipsIndex,
});

function TooltipsIndex() {
  return (
    <>
      <Outlet />
    </>
  );
}
