import { StyledInput } from "../Input.styles";

const Switch = ({
  id,
  htmlFor,
  label,
  checked,
  disabled,
  readOnly,
}: {
  id: string;
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
          type="checkbox"
          className="switch"
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    </StyledInput>
  );
};

export default Switch;
