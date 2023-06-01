import React from "react";
import Wrapper from "../../base/Wrapper.js";
import { useRef } from "react";
import Content from "../../base/Content";

export default function Alert({
  classAlert,
  children,
  name,
  cross = true
}) {
  const idDel = useRef("block");
  const style =
    classAlert !== undefined
      ? "alert " + classAlert
      : "alert";

  const handleDel = () => {
    idDel.current.style.display = "none";
  };

  return (
    <Wrapper>
      <div ref={idDel} id={name} className={style}>
        <>
          <Content classContent="text-alert">
            {children}
          </Content>
          <Content classContent="cross-alert">
            {cross ? <i onClick={handleDel} className="fa-solid fa-xmark"></i> : ""}
          </Content>
        </>
      </div>
    </Wrapper>
  );
}