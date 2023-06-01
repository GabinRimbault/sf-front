import React from "react";

export default function Tag({children, classTag}) {
  const style = classTag !== undefined ? classTag + " tag" : "tag"

  return (
    <>
      <span className={style}>
        {children}
      </span>
    </>
  )
}