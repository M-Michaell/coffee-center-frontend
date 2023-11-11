import React from "react";
import { useSelector } from "react-redux";
import Oneproduct from "./oneproduct";

function CartItems(props) {
  const { Delivery } = props;
  const cart = useSelector((state) => state.cart.cartItems);
  
  // console.log("cart",cart);

  let totalPrice = 0;
  let totalDiscount = 0;
  const cartPrices = cart.map((item) => Math.round(item.product.price * item.quantity));
  cartPrices.forEach((itemPrice) => {
    totalPrice += itemPrice;
  });
  const cartDiscount = cart.map((item) =>
    Math.round((item.product.price * item.quantity * item.product.discount_percentage) / 100)
  );
  cartDiscount.forEach((itemDiscount) => {
    totalDiscount += itemDiscount;
  });

  let toPay = totalPrice - totalDiscount;

  return (
    <>
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fff mb-0">Promo code</p>
          <a className="orange btn btn-outline-warning rounded-pill px-5 py-0">
            Add
          </a>
        </div>
        <hr className="fff" />
        <div>
          <div className="d-flex gray1 w-75 justify-content-evenly fs-5">
            <p>{cart.length} items</p>
            <p className="fff">total: {totalPrice} EGP</p>
          </div>

          {/* /////////////// */}
          {cart.map((item, index) => (
            <Oneproduct item={item} key={index} />
          ))}
          {/* /////////////////// */}

          {/* start total */}
          <hr className="fff" />
          <div className="d-flex flex-column w-75 mx-auto my-5 ">
            <div className="d-flex justify-content-between mb-0 pb-0">
              <p className="gray1 p-0 m-0">Total</p>
              <p className="fff fs-5 m-0 p-0">{totalPrice} EGP</p>
            </div>
            <div className="d-flex justify-content-between mb-0 pb-0">
              <p className="gray1 p-0 m-0">Discount</p>
              <p className="fff fs-5 m-0 p-0">-{totalDiscount} EGP</p>
            </div>
            <div className="d-flex justify-content-between mt-0 pt-0">
              <p className="gray1 p-0 m-0">Delivery</p>
              <p className="fff fs-5 p-0 m-0">{Delivery} EGP</p>
            </div>
            <div className="d-flex justify-content-between my-4">
              <p className="gray1 ms-3 fs-5">To pay</p>
              <p className="fff fs-4">{toPay + Delivery} EGP</p>
            </div>

            <button
              className="btn rounded-pill fff w-75 align-self-end py-2 border-0 "
              style={{ background: "var(--orange)" }}
            >
              Confirm the order
            </button>
          </div>
          {/* end total */}
          {/*  */}

          
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default CartItems;
