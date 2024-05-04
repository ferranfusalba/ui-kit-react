import { createLazyFileRoute } from "@tanstack/react-router";
import DropdownSelect from "../components/dropdowns/select-option/DropdownSelect";
import LayoutCenter from "../styles/layouts/LayoutCenter";

export const Route = createLazyFileRoute("/dropdown-select")({
  component: DropdownSelectPage,
});

function DropdownSelectPage() {
  return (
    <LayoutCenter>
      <>
        <div className="container">
          <div>Default</div>
          <DropdownSelect></DropdownSelect>
        </div>
      </>
    </LayoutCenter>
  );
}
