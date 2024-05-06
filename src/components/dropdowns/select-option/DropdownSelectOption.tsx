const DropdownSelectOption = ({
  label,
  value,
  options,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
  onChange: (event: React.BaseSyntheticEvent) => void;
}) => {
  return (
    <>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {placeholder ? (
            <option value="" disabled defaultValue={placeholder}>
              {placeholder}
            </option>
          ) : null}
          {options.map((option: { label: string; value: string }) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default DropdownSelectOption;
