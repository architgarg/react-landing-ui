import React from "react";
import styles from "./Switch.module.scss";

interface Props {
  label: string;
}

export const Switch: React.FC<Props> = ({ label }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="switch" />
      <label htmlFor="switch">
        <span>{label}</span>
      </label>
    </div>
  );
};
