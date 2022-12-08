import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const containsItems = products.length >= 1;

  const stripePromise = loadStripe("pk_test_51MCSIWHBBC1SsvbYqWW5BGEkj6WZegs4K0fzGsPEBCeu25rAX5OdB4nr2RdFjqEcBQcoj4Ac52zqRspfFDvyRXpo00f6e1nDZb"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  const totalPrice = () => {
    const total = products.reduce(
      (accum, curr) => accum + curr.price * curr.quantity,
      0
    );
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {containsItems && (
        <div className="cartContent">
          {products.map(({ title, desc, img, price, id, quantity }) => (
            <div key={id} className="item">
              <img src={img} alt="title" />
              <div className="details">
                <h1>{title}</h1>
                <p>{desc?.substring(0, 100)}</p>
                <div className="price">
                  {quantity} x {price}£
                </div>
              </div>
              <DeleteOutlinedIcon
                className="delete"
                onClick={() => dispatch(removeItem(id))}
              />
            </div>
          ))}
        </div>
      )}
      {!containsItems && <span>Your cart is empty</span>}
      <hr />
      <div className="total">
        <span>SUBTOTAL</span>
        <span>£{totalPrice()}</span>
      </div>
      <button
        className={`${!containsItems ? "disabled" : ""}`}
        disabled={!containsItems}
        onClick={handlePayment}
      >
        PROCEED TO CHECKOUT
      </button>
      {containsItems && (
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      )}
    </div>
  );
};

export default Cart;
