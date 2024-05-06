import { createLazyFileRoute } from "@tanstack/react-router";
import DropdownSingleOption from "../components/dropdowns/absolute-div/DropdownSingleOption";
import LayoutCenter from "../styles/layouts/LayoutCenter";
import { useCounterStore } from "../store/store";

export const Route = createLazyFileRoute("/dropdown-single-option")({
  component: DropdownSingleOptionPage,
});

function DropdownSingleOptionPage() {
  const setSelectedValue = useCounterStore((state) => state.setSelectedValue);
  const value = useCounterStore((state) => state.value);

  const alertOptions = [
    {
      label: "Visits",
      value: "visits",
      setFunction: () => setSelectedValue("visits"),
    },
    {
      label: "Conversions",
      value: "conversions",
      setFunction: () => setSelectedValue("conversions"),
    },
  ];

  const frequencyOptions = [
    {
      label: "Hourly",
      value: "hourly",
      setFunction: () => setSelectedValue("hourly"),
    },
    {
      label: "8 hours",
      value: "8h",
      setFunction: () => setSelectedValue("8h"),
    },
    {
      label: "12 hours",
      value: "12h",
      setFunction: () => setSelectedValue("12h"),
    },
    {
      label: "Daily (24h)",
      value: "daily",
      setFunction: () => setSelectedValue("daily"),
    },
    {
      label: "Inactive",
      value: "inactive",
      setFunction: () => setSelectedValue("inactive"),
    },
  ];

  const everyOptions = [
    {
      label: "Monday",
      value: "monday",
      setFunction: () => setSelectedValue("monday"),
    },
    {
      label: "Tuesday",
      value: "tuesday",
      setFunction: () => setSelectedValue("tuesday"),
    },
    {
      label: "Wednesday",
      value: "wednesday",
      setFunction: () => setSelectedValue("wednesday"),
    },
    {
      label: "Thursday",
      value: "thursday",
      setFunction: () => setSelectedValue("thursday"),
    },
    {
      label: "Friday",
      value: "friday",
      setFunction: () => setSelectedValue("friday"),
    },
    {
      label: "Saturday",
      value: "saturday",
      setFunction: () => setSelectedValue("saturday"),
    },
    {
      label: "Sunday",
      value: "sunday",
      setFunction: () => setSelectedValue("sunday"),
    },
  ];

  const atOptions = [
    {
      label: "00:00",
      value: "00:00",
      setFunction: () => setSelectedValue("00:00"),
    },
    {
      label: "01:00",
      value: "01:00",
      setFunction: () => setSelectedValue("01:00"),
    },
    {
      label: "02:00",
      value: "02:00",
      setFunction: () => setSelectedValue("02:00"),
    },
    {
      label: "03:00",
      value: "03:00",
      setFunction: () => setSelectedValue("03:00"),
    },
    {
      label: "04:00",
      value: "04:00",
      setFunction: () => setSelectedValue("04:00"),
    },
    {
      label: "05:00",
      value: "05:00",
      setFunction: () => setSelectedValue("05:00"),
    },
    {
      label: "06:00",
      value: "06:00",
      setFunction: () => setSelectedValue("06:00"),
    },
    {
      label: "07:00",
      value: "07:00",
      setFunction: () => setSelectedValue("07:00"),
    },
    {
      label: "08:00",
      value: "08:00",
      setFunction: () => setSelectedValue("08:00"),
    },
    {
      label: "09:00",
      value: "09:00",
      setFunction: () => setSelectedValue("09:00"),
    },
    {
      label: "10:00",
      value: "10:00",
      setFunction: () => setSelectedValue("10:00"),
    },
    {
      label: "11:00",
      value: "11:00",
      setFunction: () => setSelectedValue("11:00"),
    },
    {
      label: "12:00",
      value: "12:00",
      setFunction: () => setSelectedValue("12:00"),
    },
    {
      label: "13:00",
      value: "13:00",
      setFunction: () => setSelectedValue("13:00"),
    },
    {
      label: "14:00",
      value: "14:00",
      setFunction: () => setSelectedValue("14:00"),
    },
    {
      label: "15:00",
      value: "15:00",
      setFunction: () => setSelectedValue("15:00"),
    },
    {
      label: "16:00",
      value: "16:00",
      setFunction: () => setSelectedValue("16:00"),
    },
    {
      label: "17:00",
      value: "17:00",
      setFunction: () => setSelectedValue("17:00"),
    },
    {
      label: "18:00",
      value: "18:00",
      setFunction: () => setSelectedValue("18:00"),
    },
    {
      label: "19:00",
      value: "19:00",
      setFunction: () => setSelectedValue("19:00"),
    },
    {
      label: "20:00",
      value: "20:00",
      setFunction: () => setSelectedValue("20:00"),
    },
    {
      label: "21:00",
      value: "21:00",
      setFunction: () => setSelectedValue("21:00"),
    },
    {
      label: "22:00",
      value: "22:00",
      setFunction: () => setSelectedValue("22:00"),
    },
    {
      label: "23:00",
      value: "23:00",
      setFunction: () => setSelectedValue("23:00"),
    },
  ];

  return (
    <LayoutCenter>
      <>
        <div className="container">
          <div>Alert Type</div>
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            menuItems={alertOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-left"
            menuItems={alertOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-center-x"
            menuItems={alertOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-right"
            menuItems={alertOptions}
          />
        </div>
        <br />
        <div className="container">
          <div>Frequency</div>
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            menuItems={frequencyOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-left"
            menuItems={frequencyOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-center-x"
            menuItems={frequencyOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-right"
            menuItems={frequencyOptions}
          />
        </div>
        <br />
        <div className="container">
          <div>Every</div>
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            menuItems={everyOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-left"
            menuItems={everyOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-center-x"
            menuItems={everyOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-right"
            menuItems={everyOptions}
          />
        </div>
        <br />
        <div className="container">
          <div>At</div>
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            menuItems={atOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-left"
            menuItems={atOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-center-x"
            menuItems={atOptions}
          />
          <DropdownSingleOption
            placeholder="Select an option"
            direction="direction-bottom"
            alignment="alignment-right"
            menuItems={atOptions}
          />
        </div>
        <br />
        <p>Selected value: {value}</p>
      </>
    </LayoutCenter>
  );
}
