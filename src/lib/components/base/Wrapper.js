import React from "react";

export default function Wrapper({classWrapper, children, ...props}) {
  const style = classWrapper !== undefined ? classWrapper + " wrapper" : "wrapper"

  return (
    <div className={style} {...props}>
      {children}
    </div>
  )
}