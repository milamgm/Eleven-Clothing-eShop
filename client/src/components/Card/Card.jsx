import { Link } from "@mui/material";
import React from "react";
import "./Card.scss";

const Card = ({ id, img, img2, title, oldPrice, price, isNew }) => {
  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="card">
        <div className="image">
          {isNew && <span>New Season</span>}
          <img src={img} alt="" className="mainImg" />
          <img src={img2} alt="" className="secondImg" />
        </div>
        <h2>{title}</h2>
        <div className="price">
          <h3>{oldPrice}£</h3>
          <h3>{price}£</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
