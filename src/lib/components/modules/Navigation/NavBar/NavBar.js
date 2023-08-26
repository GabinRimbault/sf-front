import React from "react";

export default function NavBar({ classNavBar, children }) {
  const style = classNavBar ? "nav_bar " + classNavBar : "nav_bar";

  return (
    <header className={style}>
      <nav>{children}</nav>
    </header>
  );
}
