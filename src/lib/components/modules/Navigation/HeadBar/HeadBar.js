import React from "react";
import List from "../../../base/List";

export default function HeadBar({ classHeadBar, classLink = "liseret", data }) {
  const style = classHeadBar ? "headbar " + classHeadBar : "headbar";
  let listNav = null;

  if(data != null)
    listNav = data
  else
    listNav = {
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
        <List type={"ul"} classLink={classLink} data={listNav} />
        <div className={"social_content"}>
          <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-snapchat"></i>
        </div>
      </nav>
    </header>
  );
}