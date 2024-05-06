import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import DropdownSelectOption from "../components/dropdowns/select-option/DropdownSelectOption";
import LayoutCenter from "../styles/layouts/LayoutCenter";

export const Route = createLazyFileRoute("/dropdown-select-option")({
  component: DropdownSelectOptionPage,
});

function DropdownSelectOptionPage() {
  const [alert, setAlert] = useState("");
  const [frequency, setFrequency] = useState("");
  const [every, setEvery] = useState("");
  const [at, setAt] = useState("");

  const handleAlertChange = (event: React.BaseSyntheticEvent) => {
    setAlert(event.target.value);
  };

  const handleFrequencyChange = (event: React.BaseSyntheticEvent) => {
    setFrequency(event.target.value);
  };

  const handleEveryChange = (event: React.BaseSyntheticEvent) => {
    setEvery(event.target.value);
  };

  const handleAtChange = (event: React.BaseSyntheticEvent) => {
    setAt(event.target.value);
  };

  return (
    <LayoutCenter>
      <>
        <div className="container">
          <div>Default</div>
          <div>
            <DropdownSelectOption
              label="Alert Type"
              options={[
                { label: "Visits", value: "visits" },
                { label: "Conversions", value: "conversions" },
              ]}
              value={alert}
              onChange={handleAlertChange}
              placeholder="Select an option"
            />
            <br />
            <DropdownSelectOption
              label="Frequency"
              options={[
                { label: "Hourly", value: "hourly" },
                { label: "8 hours", value: "8h" },
                { label: "12 hours", value: "12h" },
                { label: "Daily (24h)", value: "daily" },
                { label: "Inactive", value: "inactive" },
              ]}
              value={frequency}
              onChange={handleFrequencyChange}
              placeholder="Select an option"
            />
            <br />
            <DropdownSelectOption
              label="Every"
              options={[
                { label: "Monday", value: "monday" },
                { label: "Tuesday", value: "tuesday" },
                { label: "Wednesday", value: "wednesday" },
                { label: "Thursday", value: "thursday" },
                { label: "Friday", value: "friday" },
                { label: "Saturday", value: "saturday" },
                { label: "Sunday", value: "sunday" },
              ]}
              value={alert}
              onChange={handleEveryChange}
            />
            <br />
            <DropdownSelectOption
              label="At"
              options={[
                { label: "00:00", value: "00:00" },
                { label: "01:00", value: "01:00" },
                { label: "02:00", value: "02:00" },
                { label: "03:00", value: "03:00" },
                { label: "04:00", value: "04:00" },
                { label: "05:00", value: "05:00" },
                { label: "06:00", value: "06:00" },
                { label: "07:00", value: "07:00" },
                { label: "08:00", value: "08:00" },
                { label: "09:00", value: "09:00" },
                { label: "10:00", value: "10:00" },
                { label: "11:00", value: "11:00" },
                { label: "12:00", value: "12:00" },
                { label: "13:00", value: "13:00" },
                { label: "14:00", value: "14:00" },
                { label: "15:00", value: "15:00" },
                { label: "16:00", value: "16:00" },
                { label: "17:00", value: "17:00" },
                { label: "18:00", value: "18:00" },
                { label: "19:00", value: "19:00" },
                { label: "20:00", value: "20:00" },
                { label: "21:00", value: "21:00" },
                { label: "22:00", value: "22:00" },
                { label: "23:00", value: "23:00" },
              ]}
              value={frequency}
              onChange={handleAtChange}
            />

            <p>Alert Type: {alert}</p>
            <p>Frequency: {frequency}</p>
            <p>Every: {every}</p>
            <p>At: {at}</p>
          </div>
        </div>
      </>
    </LayoutCenter>
  );
}
