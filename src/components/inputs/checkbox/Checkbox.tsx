import { StyledInput } from "../Input.styles";

const Checkbox = ({
  id,
  htmlFor,
  checked,
  disabled,
  readOnly,
  label,
}: {
  id: string;
  htmlFor: string;
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  label: string;
}) => {
  return (
    <StyledInput>
      <div>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          readOnly={readOnly}
          disabled={disabled}
        />
        <label htmlFor={htmlFor}>{label}</label>
      </div>
    </StyledInput>
  );
};

export default Checkbox;
