import { StyledInput } from "../Input.styles";

const Switch = ({
  id,
  htmlFor,
  label,
  checked,
  disabled,
  readOnly,
  handleChange,
  defaultChecked,
}: {
  id: string;
  htmlFor: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  readOnly?: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <StyledInput>
      <div>
        <input
          id={id}
          type="checkbox"
          className="switch"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    </StyledInput>
  );
};

export default Switch;
