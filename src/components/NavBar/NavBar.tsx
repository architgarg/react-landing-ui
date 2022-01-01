import React, { isValidElement } from "react";
import styles from "./NavBar.module.scss";
import classNames from "classnames";
import flattenChildren from "react-keyed-flatten-children";
import { Hamburger } from "../Hamburger/Hamburger";

interface Props {
  logo: React.ReactNode
}

export const NavBar: React.FC<Props> = ({logo, children}) => {
  // const [active, setActive] = React.useState(false);

  // todo: Uncomment this after publishing this to npm
  // https://github.com/facebook/react/issues/13991
  const active = true;
  const setActive: any = () => {}

  return <div className={classNames(styles.container, active && styles.opened)}>
    <nav className={styles.hamContainer}>
      <div className={styles.content}>
        {logo}

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

      <Hamburger className={styles.hamburger} active={active} setActive={setActive}/>
    </nav>
  </div>
};
