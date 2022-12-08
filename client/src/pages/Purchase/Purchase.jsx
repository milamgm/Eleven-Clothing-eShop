import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
const Purchase = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = Boolean(searchParams.get("success") === "true");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, []);
  console.log(success);
  return (
    <div>
      {success && (
        <div className="content">
          <h1>Thhank you for your purchase</h1>
          <p>
            Your order nr: 234324 has successfully placed. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur sint ab quibusdam
            optio ea ipsa adipisci voluptate ducimus! Impedit ipsa modi sapiente
            cupiditate odit, harum laudantium dignissimos accusantium id qui.
          </p>
        </div>
      )}
      {!success && (
        <div className="content">
          <h1>Something whent wrong</h1>
          <p>
            Your order nr: 234324 has successfully placed. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur sint ab quibusdam
            optio ea ipsa adipisci voluptate ducimus! Impedit ipsa modi sapiente
            cupiditate odit, harum laudantium dignissimos accusantium id qui.
          </p>
        </div>
      )}
    </div>
  );
};

export default Purchase;
