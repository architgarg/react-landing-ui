import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined";
}

export const Button: React.FC<Props> = ({
  className,
  children,
  variant = "filled",
  ...props
}) => {
  return (
    <button className={classNames(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
