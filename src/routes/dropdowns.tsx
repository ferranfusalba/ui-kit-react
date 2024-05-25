import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dropdowns")({
  component: DropdownsIndex,
});

function DropdownsIndex() {
  return (
    <>
      <Outlet />
    </>
  );
}
