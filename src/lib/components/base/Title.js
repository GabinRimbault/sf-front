import React from "react";

export default function Title({classTitle, lvl = "h1", children}) {

  const Type = lvl;

  return(
    <Type
      className={classTitle}
    >
      {children}
    </Type>
  )
}