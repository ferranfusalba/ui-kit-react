import { createFileRoute } from "@tanstack/react-router";
import Radio from "../../components/inputs/radio/Radio";

export const Route = createFileRoute("/inputs/radio")({
  component: RadioPage,
});

function RadioPage() {
  return (
    <div>
      <Radio id="r1" value="1" htmlFor="r1" label="Radio"></Radio>
      <Radio
        id="r2"
        value="2"
        htmlFor="r2"
        label="Radio Checked"
        checked
        readOnly
      ></Radio>
      <Radio
        id="r1d"
        value="1"
        htmlFor="r1d"
        label="Radio Disabled"
        disabled
        readOnly
      ></Radio>
      <Radio
        id="r2d"
        value="2"
        htmlFor="r2d"
        label="Radio Checked Disabled"
        checked
        disabled
        readOnly
      ></Radio>
    </div>
  );
}
