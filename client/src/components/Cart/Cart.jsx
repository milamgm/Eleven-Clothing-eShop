import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleeve Graphic T-Shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt. Distinctio magnam veritatis odio porro. At consequuntur optio omnis magnam molestiae ab doloribus necessitatibus illum inventore recusandae, deserunt quo veritatis?",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Coat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt. Distinctio magnam veritatis odio porro. At consequuntur optio omnis magnam molestiae ab doloribus necessitatibus illum inventore recusandae, deserunt quo veritatis?",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Skirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt. Distinctio magnam veritatis odio porro. At consequuntur optio omnis magnam molestiae ab doloribus necessitatibus illum inventore recusandae, deserunt quo veritatis?",
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Vintage Blouse",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt. Distinctio magnam veritatis odio porro. At consequuntur optio omnis magnam molestiae ab doloribus necessitatibus illum inventore recusandae, deserunt quo veritatis?",
    isNew: false,
    oldPrice: 19,
    price: 12,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      <div className="cartContent">
        {data?.map(({ title, desc, img, price }) => (
          <div className="item">
            <img src={img} alt="title" />
            <div className="details">
              <h1>{title}</h1>
              <p>{desc?.substring(0, 100)}</p>
              <div className="price">1 x {price}£</div>
            </div>
            <DeleteOutlinedIcon className="delete" />
          </div>
        ))}
      </div>
      <hr />
      <div className="total">
        <span>SUBTOTAL</span>
        <span>£234</span>
      </div>
    </div>
  );
};

export default Cart;
