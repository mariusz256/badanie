import React from "react";
import "./CardDetail.scss";

function CardDetail({ obj }) {
  console.log(obj.lists);

  const content = (lists) => {
    const arr = lists.forEach((element) => {
      console.log(element);
      const title = element.title;
      return title;
    });
    console.log(arr);
  };

  return (
    <div className="CardDetail">
      <div className="CardDetail__content">
        <h2 className="CardDetail__content__title">{obj.title}</h2>
        <p className="CardDetail__content__text">{obj.description}</p>
        {content(obj.lists)}
      </div>
    </div>
  );
}

export default CardDetail;
