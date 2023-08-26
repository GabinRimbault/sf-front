import React from "react";

export default function List({ type = "ul", data = [], classList, classLink }) {
  const Type = type === "ol" || type === "ul" ? type : "ul";
  let listItems = null;

  if (Array.isArray(data)) {
    listItems = data.map((value, key) => {
      return <li key={key}>{value}</li>;
    });
  } else if (typeof data === "object" && data !== null) {
    listItems = Object.entries(data).map(([key, value], index) => {
      const isExternalLink = value.liens[0].startsWith("http");
      const linkProps = isExternalLink
        ? { href: value.liens[0], target: "_blank", rel: "noopener noreferrer" }
        : { href: value.liens[0] };

      return (
        <li key={index} id={key}>
          <a {...linkProps} className={classLink} alt={"Lien " + key}>
            {value.icons && value.icons[0] === "left" && value.icons[1]}
            {value.icons && value.icons[0] === "left" && " "}
            {value.liens[1]}
            {value.icons && value.icons[0] === "right" && " "}
            {value.icons && value.icons[0] === "right" && value.icons[1]}
          </a>
        </li>
      );
    });
  }

  return (
    <Type className={classList !== undefined ? "list " + classList : "list"}>
      {listItems}
    </Type>
  );
}
