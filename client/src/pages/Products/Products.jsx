import React from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const catId = Number(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  console.log(useParams());
  return (
    <div className="products">
      <div className="banner">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/289225/pexels-photo-289225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1>WOMAN</h1>
      </div>
      <div className="content">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By Price</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Lowest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
      </div>
   
    </div>
  );
};

export default Products;
