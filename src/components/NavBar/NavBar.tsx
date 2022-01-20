import React, { isValidElement } from "react";
import styles from "./NavBar.module.scss";
import classNames from "classnames";
import flattenChildren from "react-keyed-flatten-children";
import { Hamburger } from "../Hamburger/Hamburger";

interface Props {
  logo: React.ReactNode
}

export const NavBar: React.FC<Props> = ({logo, children}) => {
  const [active, setActive] = React.useState(false);

  return <nav className={classNames(styles.container, active && styles.opened)}>
    <div className={styles.content}>
      <div className={styles.logoHamContainer}>
        {logo}
        <Hamburger className={styles.hamburger} active={active} setActive={setActive}/>
      </div>
      <ul className={classNames(styles.navItems)} onClick={() => setActive(false)}>
        {
          flattenChildren(children).map(child => {
            if (isValidElement(child)) {
              return <li key={child.key}>{child}</li>
            }
            return {child}
          })
        }
      </ul>
    </div>
  </nav>
};
