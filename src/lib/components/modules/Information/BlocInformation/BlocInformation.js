import React from "react";
import Wrapper from "../../../base/Wrapper.js";

export default function BlocInformation({
  name,
  classBlocInformation,
  type = "infos",
  child1,
  child2,
  drop = true,
}) {
  const style =
    classBlocInformation !== undefined
      ? classBlocInformation + " bloc_information"
      : "bloc_information";

  return (
    <Wrapper>
      <div id={name} className={style + " " + type}>
        {child1}
        {drop ? (
          <i className="fa-solid fa-chevron-down"></i>
        ) : (
          <i className="fa-solid fa-chevron-up"></i>
        )}
      </div>
      <div className="bloc_content">{child2}</div>
    </Wrapper>
  );
}
