import React from "react";
import Wrapper from "../../../base/Wrapper.js";

export default function ProgressBar({
  children,
  width,
  height = "2px",
  color,
}) {
  return (
    <Wrapper>
      <div className="progress_bar">
        <span>{children}</span>
        <div className={"bar_style"} style={{ height: height.toString() + "px" }}>
          <div
            style={{ backgroundColor: color, width: width.toString() + '%' }}
            className={"bar_color"}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
}
