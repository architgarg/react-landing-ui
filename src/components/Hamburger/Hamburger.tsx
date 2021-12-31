import React from "react";
import styles from "./Hamburger.module.scss";
import classNames from "classnames";

interface Props {
  className?: string,
  active?: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Hamburger: React.FC<Props> = ({
  className,
  active= false,
  setActive
}) => {
  return <div
    className={classNames(styles.hamburger, active && styles.active, className)}
    onClick={() => {setActive((a) => !a)}}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.bar} d="M3 6H21" stroke="#3B415F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className={styles.bar} d="M3 18H21" stroke="#3B415F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
};
