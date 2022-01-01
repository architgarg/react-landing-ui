import React from "react";
import styles from "./Footer.module.scss";
import flattenChildren from "react-keyed-flatten-children";

interface Props {
  logo: React.ReactNode
  mainLinks: React.ReactFragment
  extraLinks: React.ReactFragment
}

export const Footer: React.FC<Props> = ({
  logo,
  mainLinks,
  extraLinks
}) => {

  return <footer className={styles.container}>
    <div className={styles.footerContent}>
      {logo}
      <div className={styles.mainLinks}>
        {flattenChildren(mainLinks)}
      </div>
    </div>

    <div className={styles.extraLinks}>
      {flattenChildren(extraLinks)}
    </div>
  </footer>
};
