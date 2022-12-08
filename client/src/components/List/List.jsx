import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  //Fetchs Products acording with filter parameters
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories]?filters[title][$eq]=${catId}${subCats.map(
      (subCat) => `&[filters][sub_categories][id][$eq]=${subCat}`
    )}&[filters]][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  console.log(data);
  return (
    <div className="list">
      {loading
        ? "Loading"
        : error
        ? "Something went worng"
        : data?.map(({ attributes, id }) => (
            <Card key={id} {...attributes} id={id} />
          ))}
    </div>
  );
};

export default List;
