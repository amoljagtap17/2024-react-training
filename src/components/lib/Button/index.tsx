import { ReactNode } from "react";
import styles from "./Button.module.less";

interface IButtonProps {
  variant?: "contained" | "outlined" | "primary";
  children: ReactNode;
  onClick: () => void;
}

export function Button({
  children,
  variant = "contained",
  onClick,
}: IButtonProps) {
  const classes =
    variant === "primary"
      ? styles.Button__primary
      : variant === "contained"
      ? styles.Button__contained
      : styles.Button__outlined;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
