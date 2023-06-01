import React from "react";
import Wrapper from "../../base/Wrapper.js";
import { useRef } from "react";
import Content from "../../base/Content";

export default function Notification({
  classNotification,
  children,
  name,
  del = true,
  icon = false,
  type = "classic"
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
      <div ref={idDel} id={name} className={type + " " + style}>
        <>
          <Content classContent="text-notification">
            {icon ? <i className="fa-solid fa-circle-info"></i> : ""}
            {" "}
            {children}
          </Content>
          <Content classContent="cross-notification">
            {del ? <i onClick={handleDel} className="fa-solid fa-xmark"></i> : ""}
          </Content>
        </>
      </div>
    </Wrapper>
  );
}

/*
type:

border
import
 */