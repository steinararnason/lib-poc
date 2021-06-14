import React, { ButtonHTMLAttributes } from "react";
import { blue } from '../core/ts/color';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.VFC<Props> = ({ children, ...props }) => (
  <button style={{color: blue}} {...props}>{children}</button>
);
