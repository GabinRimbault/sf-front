import React from "react";

export default function Lame({classLame, children, ...props}) {
  const style = classLame !== undefined ? classLame + " lame" : "lame"

  return (
    <div className={style} {...props}>
      {children}
    </div>
  )
}