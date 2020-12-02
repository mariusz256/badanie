import React, { useEffect } from "react";
import "./CardDetail.scss";
import { ReactComponent as ListStyle } from "../../assets/list_style.svg";

function CardDetail({ obj, exit, cord }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return () => {
      window.scrollTo({ top: cord.y, left: cord.x, behavior: "smooth" });
    };
  });

  const content = (content) => {
    return content.map((el, i) => {
      // eslint-disable-next-line default-case
      switch (el.type) {
        case "list":
          return (
            <div className="CardDetail__content__text" key={i}>
              <h3 className="CardDetail__content__title--small">{el.title}</h3>
              <ul>
                {el.elements.map((item, index) => {
                  return (
                    <li key={index}>
                      <ListStyle className="CardDetail__content__text__listStyle" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );

        case "paragraph":
          return (
            <div className="CardDetail__content__text" key={i}>
              <h3 className="CardDetail__content__title--small">{el.title}</h3>
              <p>{el.elements}</p>
            </div>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="CardDetail">
      <div onClick={exit} className="CardDetail__cross__contianer">
        <div className="CardDetail__cross__contianer__exit"></div>
      </div>
      <div className="CardDetail__content">
        <h2 className="CardDetail__content__title">{obj.title}</h2>
        <p className="CardDetail__content__text">{obj.description}</p>
        {content(obj.content)}
      </div>
    </div>
  );
}

export default CardDetail;
