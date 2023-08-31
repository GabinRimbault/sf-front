import React from "react";
import { Link } from "react-router-dom";

export default function Tag({ children, classTag, linkTag = null }) {
  const style = classTag !== undefined ? classTag + " tag" : "tag";

  return (
    <>
      {linkTag !== null ? (
        <span className={style}>
          <Link to={linkTag}>
            {children}
          </Link>
        </span>
      ) : (
        <span className={style}>
          {children}
        </span>
      )}
    </>
  );
}
