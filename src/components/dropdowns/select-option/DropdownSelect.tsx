import React, { useState } from "react";

const Select = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (event: React.BaseSyntheticEvent) => void;
}) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option: { label: string; value: string }) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

const DropdownSelect = () => {
  const [food, setFood] = useState("fruit");
  const [drink, setDrink] = useState("water");

  const handleFoodChange = (event: React.BaseSyntheticEvent) => {
    setFood(event.target.value);
  };

  const handleDrinkChange = (event: React.BaseSyntheticEvent) => {
    setDrink(event.target.value);
  };

  return (
    <>
      <div>
        <Select
          label="What do we eat?"
          options={[
            { label: "Fruit", value: "fruit" },
            { label: "Vegetable", value: "vegetable" },
            { label: "Meat", value: "meat" },
          ]}
          value={food}
          onChange={handleFoodChange}
        />
        <br />
        <Select
          label="What do we drink?"
          options={[
            { label: "Water", value: "water" },
            { label: "Beer", value: "beer" },
            { label: "Wine", value: "wine" },
          ]}
          value={drink}
          onChange={handleDrinkChange}
        />

        <p>We eat {food}!</p>
        <p>We drink {drink}!</p>
      </div>
    </>
  );
};

export default DropdownSelect;
