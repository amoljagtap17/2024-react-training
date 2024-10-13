import { ReactNode } from "react";
import styles from "./Button.module.less";

interface IButtonProps {
  variant?: "contained" | "outlined";
  children: ReactNode;
}

export function Button({ children, variant = "contained" }: IButtonProps) {
  const classes =
    variant === "contained"
      ? styles.Button__contained
      : styles.Button__outlined;

  return <button className={classes}>{children}</button>;
}
