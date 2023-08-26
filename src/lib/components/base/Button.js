import React from "react";
import {Link} from "react-router-dom";

export default function Button({classBtn, children = "Click Me", href, ...props}) {
  const style = classBtn !== undefined ? classBtn : undefined

  return (
    <Link
      className={style}
      to={href}
      {...props}
    >
      {children}
    </Link>
  )
}