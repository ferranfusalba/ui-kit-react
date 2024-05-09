import { StyledInput } from "../Input.styles";

const Radio = ({
  id,
  value,
  htmlFor,
  label,
  checked,
  disabled,
  readOnly,
}: {
  id: string;
  value: string;
  htmlFor: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}) => {
  return (
    <StyledInput>
      <div>
        <input
          id={id}
          type="radio"
          name="radio"
          value={value}
          checked={checked}
          readOnly={readOnly}
          disabled={disabled}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    </StyledInput>
  );
};

export default Radio;
