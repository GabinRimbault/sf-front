import React from "react";
import Content from "../../../base/Content";
import Title from "../../../base/Title";
import {Link} from "react-router-dom";

const Cards = ({link = "#", classCards, children}) => {
  const style = classCards !== undefined ? classCards + " cards" : "cards"

  return (
    <>
      <Link to={link} className={style}>
        {
          children
        }
      </Link>
    </>
  );
}

Cards.Header = ({ src, title = "h2", children }) => {
    return (
        <div className="cards-header">
            {src !== undefined && <img src={src} alt="Image" />}
            <Title lvl={title}>{children}</Title>
        </div>
    );
};


Cards.Body = ({ children }) => {
  return (
    <div className="card-body">
      <Content>{children}</Content>
    </div>
  );
};

Cards.Footer = ({ children }) => {
  return (
    <div className="card-footer">
      <Content>{children}</Content>
    </div>
  );
};

export default Cards;