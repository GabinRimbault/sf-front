import React from "react";
import Wrapper from "../../base/Wrapper.js";
import { useRef } from "react";

export default function Notification({
  classNotification,
  children,
  name,
  del = true,
}) {
  const idDel = useRef("block");
  const style =
    classNotification !== undefined
      ? "notification " + classNotification
      : "notification";

  const handleDel = () => {
    idDel.current.style.display = "none";
  };

  return (
    <Wrapper>
      <div ref={idDel} id={name} className={style}>
        <p>
          {children}
          {del ? <i onClick={handleDel} className="fa-solid fa-xmark"></i> : ""}
        </p>
      </div>
    </Wrapper>
  );
}
