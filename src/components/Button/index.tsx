import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { Button as StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
