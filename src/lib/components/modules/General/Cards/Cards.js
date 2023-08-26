import React from "react";

export default function Cards({classCards, children}) {
  const style = classCards !== undefined ? classCards + " cards" : "cards"

  return (
    <>
      <div className={style}>
        {
          children
        }
      </div>
    </>
  );
}