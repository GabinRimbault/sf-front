import React from "react";
import Wrapper from "../../base/Wrapper.js";

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
        <div className={"bar_style"} style={{ height: height }}>
          <div
            style={{ backgroundColor: color, width: width }}
            className={"bar_color"}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
}
