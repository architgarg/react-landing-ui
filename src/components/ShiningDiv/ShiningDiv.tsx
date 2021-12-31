import React, { HTMLAttributes } from "react"
import styles from "./ShiningDiv.module.scss"

import classNames from "classnames"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const ShiningDiv: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={classNames(styles.shining, className)} {...props}>
      {children}
    </div>
  )
}
