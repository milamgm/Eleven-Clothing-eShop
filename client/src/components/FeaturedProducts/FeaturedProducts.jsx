import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A autem
          molestiae laudantium id mollitia! Ex soluta sequi quasi perferendis
          modi eligendi quae dicta at veniam totam. Ipsa enim nisi tempora.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading"
          : data.map(({ attributes, id }) => <Card {...attributes} id={id} key={id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
