import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.scss";
import Cart from "../Cart/Cart";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [openCart, setOpenCart] = useState(false);

  const itemQty =
    products.length >= 1
      ? products.reduce((accum, curr) => accum + curr.quantity, 0)
      : 0;

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>GBP</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/women">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/men">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/kids">
              Kids
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ELEVEN
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cartIcon"
              onClick={() => setOpenCart((prev) => !prev)}
            >
              <ShoppingCartOutlinedIcon />
              <span>{itemQty}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
