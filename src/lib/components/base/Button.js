import React from "react";
import {Link} from "react-router-dom";

export default function Button({classBtn, children = "Click Me", href, ...props}) {
  const Type = typeof href === "string" ? Link : "button";
  const style = classBtn !== undefined ? classBtn : undefined

  return (
    <Type
      className={style}
      to={href}
      {...props}
    >
      {children}
    </Type>
  )
}