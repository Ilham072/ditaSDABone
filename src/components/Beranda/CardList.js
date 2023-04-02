import React from "react";
import CardNews from "../PageNews/CardNews";

const CardList = () => {
  const cards = [1, 2, 3];

  return (
    <div style={{ display: "flex" }}>
      {cards.map((card) => (
        <CardNews key={card} />
      ))}
    </div>
  );
};

export default CardList;