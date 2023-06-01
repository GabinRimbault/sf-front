import React from "react";

export default function Content({classContent, children, ...props}) {
  return (
    <p className={classContent} {...props}>
      {children}
    </p>
  )
}