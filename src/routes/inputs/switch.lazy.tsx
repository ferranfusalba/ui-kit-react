import { createFileRoute } from "@tanstack/react-router";
import Switch from "../../components/inputs/switch/Switch";

export const Route = createFileRoute("/inputs/switch")({
  component: SwitchPage,
});

function SwitchPage() {
  return (
    <div>
      <Switch id="s1" htmlFor="s1" label="Switch"></Switch>
      <Switch
        id="s2"
        htmlFor="s2"
        label="Switch Checked"
        checked
        readOnly
      ></Switch>
      <Switch
        id="s1d"
        htmlFor="s1d"
        label="Switch Disabled"
        disabled
        readOnly
      ></Switch>
      <Switch
        id="s2d"
        htmlFor="s2d"
        label="Switch Checked Disabled"
        checked
        disabled
        readOnly
      ></Switch>
    </div>
  );
}
