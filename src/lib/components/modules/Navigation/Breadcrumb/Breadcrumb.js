import React from "react";
import List from "../../../base/List";

export default function Breadcrumb({classBread, dataNav}) {
  const style = classBread !== undefined ? classBread + " bread" : "bread"

  return (
    <nav className={style} aria-label="Breadcrumb">
      <i className="fa-solid fa-house"></i>
      <List type="ol" data={dataNav}/>
    </nav>
  )
}