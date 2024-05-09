import { createLazyFileRoute } from "@tanstack/react-router";
import Checkbox from "../components/inputs/checkbox/Checkbox";

export const Route = createLazyFileRoute("/checkbox")({
  component: CheckboxPage,
});

function CheckboxPage() {
  return (
    <div>
      <Checkbox label="Checkbox" id="c1" htmlFor="c1"></Checkbox>
      <Checkbox
        label="Checkbox Checked"
        id="c2"
        htmlFor="c2"
        checked
        readOnly
      ></Checkbox>
      <Checkbox
        label="Checkbox Disabled"
        id="c1d"
        htmlFor="c1d"
        disabled
        readOnly
      ></Checkbox>
      <Checkbox
        label="Checkbox Checked Disabled"
        id="c2d"
        htmlFor="c2d"
        checked
        disabled
        readOnly
      ></Checkbox>
    </div>
  );
}
