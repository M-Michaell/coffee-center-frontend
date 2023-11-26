import React from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link } from "react-router-dom";

export default function Empty() {
  return (
    <div>
      <RemoveShoppingCartIcon sx={{ fontSize: 200 }} className="my-5"/>
      <div className="d-flex flex-column my-5">
        <h2>Your Cart is Feeling a Bit Lonely</h2>
        <p>
          Uh-oh! It seems like your cart is empty. Time to fill it up with
          delightful goodies!
        </p>
        <p>
          Explore our amazing products and treat yourself to something special.
        </p>
        <Link to="/" className="btn w-25 mx-auto my-5 btn-outline-light custom-btn fs-6 px-auto">
        Start Shopping <i className="bi bi-cart fs-4 ms-2"></i>
        </Link>
      </div>
    </div>
  );
}
