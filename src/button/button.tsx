import React, { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.VFC<Props> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
