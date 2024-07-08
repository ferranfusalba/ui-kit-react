import React from "react";
import classNames from "classnames";

// IconButton Domain
import { StyledIconButton } from "./IconButton.styles";

export type HandleOnClick =
  | ((event: React.BaseSyntheticEvent) => void)
  | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
  | null;

interface Props {
  className?: string;
  color?: string;
  handleOnClick: HandleOnClick;
  icon: React.ReactNode;
  disabled?: boolean;
  id?: string;
}

const IconButton = (props: Props) => {
  const {
    className,
    color,
    handleOnClick,
    icon,
    disabled = false,
    id = "",
  } = props;

  return (
    <StyledIconButton
      className={classNames(className, { disabled })}
      color={color}
      onClick={handleOnClick as HandleOnClick}
      disabled={disabled}
      id={id}
    >
      {icon}
    </StyledIconButton>
  );
};

export default IconButton;
