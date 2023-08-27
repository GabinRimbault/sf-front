import React from "react";
import Content from "../../../base/Content";
import Title from "../../../base/Title";

const Cards = ({classCards, children}) => {
  const style = classCards !== undefined ? classCards + " cards" : "cards"

  return (
    <>
      <div className={style}>
        {
          children
        }
      </div>
    </>
  );
}

Cards.Header = ({ title = "h2", children }) => {
  return (
    <div className="cards-header">
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