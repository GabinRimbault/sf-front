import React from "react";
import List from "../../../base/List";

export default function HeadBar({ classHeadBar, classLink = "liseret" }) {
  const style = classHeadBar ? "headbar " + classHeadBar : "headbar";

  const dataNav = {
    home: {
      liens: ["/", "Accueil"],
    },
    products: {
      liens: ["/products", "Produits"]
    },
    category: {
      liens: ["/products/category", "Catégorie"]
    }
  };

  return (
    <header className={style}>
      <nav>
        <div className={"logo_content"}>
          <i className="fa-brands fa-drupal"></i>
        </div>
        <List type={"ul"} classLink={classLink} data={dataNav} />
        <div className={"social_content"}>
          <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-snapchat"></i>
        </div>
      </nav>
    </header>
  );
}