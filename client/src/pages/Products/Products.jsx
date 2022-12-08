import React from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = useParams().id;
  const [maxRange, setMaxRange] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  //Fetchs Subcategories
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories]?filters[title][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats((prev) =>
      isChecked
        ? [...prev, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(data);
  return (
    <div className="products">
      <ProductsBanner catId={catId}/>
      <div className="content">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data.map(({ attributes: { title }, id }) => (
              <div key={id} className="inputItem">
                <input
                  type="checkbox"
                  id="1"
                  value={id}
                  onChange={handleChange}
                />
                <label htmlFor={id}>{title}</label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter By Price</h2>
            <div className="inputItem">
              <span>0£</span>
              <input
                type="range"
                min={0}
                max={1000}
                defaultValue={maxPrice}
                onChange={(e) => setMaxRange(e.target.value)}
              />
              <span>{maxRange}£</span>
              <button onClick={() => setMaxPrice(maxRange)}>Apply</button>
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
                checked={sort === "asc"}
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
                checked={sort === "desc"}
                onChange={() => setSort("desc")}
              />
              <label htmlFor="desc">Price (Lowest First)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

const ProductsBanner = ({catId}) => {

  const { data, loading, error } = useFetch(
    `/categories?populate=*&[filters][title][$eq]=${catId}`
  );
console.log()
  return (
    <div className="banner">
      <img
        className="catImg"
        src={process.env.REACT_APP_UPLOAD_URL + data[0]?.attributes?.img?.data?.attributes?.url}
        alt=""
      />
      <h1>{catId.toUpperCase()}</h1>
    </div>
  );
};
