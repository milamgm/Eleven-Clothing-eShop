import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const images = [
  "https://images.pexels.com/photos/3268529/pexels-photo-3268529.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/11045200/pexels-photo-11045200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Product = () => {
  const [selectedImg, setSelecterdImg] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          {images.map((img, ind) => (
            <img
              key={img}
              src={img}
              alt="Adidas T-Shirt"
              onClick={() => setSelecterdImg(ind)}
            />
          ))}
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="Adidas T-Shirt" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">199£</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magnam sed
          voluptatum, cumque maiores alias dolore, dolorem ratione, quo
          voluptates fuga error totam dicta consectetur dolor atque quas veniam
          quisquam!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prev) => (prev === 20 ? 20 : prev + 1))}
          >
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
