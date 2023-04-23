import React from "react";
import { useState } from "react";

const Tour = ({ id, image, info, name, price, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-price">${price}</div>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button type="button" className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn delete-btn btn-block"
          onClick={() => deleteTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
