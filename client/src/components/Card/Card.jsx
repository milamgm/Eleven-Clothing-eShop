import { Link } from "react-router-dom";
import React from "react";
import "./Card.scss";

const Card = ({ id, img, img2, title, price, isNew, isOnSale }) => {
  const uploadUrl = process.env.REACT_APP_UPLOAD_URL;

  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="card">
        <div className="image">
          {isNew && <span>New Season</span>}
          <img
            src={uploadUrl + img?.data?.attributes?.url}
            alt=""
            className="mainImg"
          />
          <img
            src={uploadUrl + img2?.data?.attributes?.url}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{title}</h2>
        <div className="price">
          {isOnSale && <h3 className="oldPrice">{price + 20}£</h3>}
          <h3>{price}£</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
