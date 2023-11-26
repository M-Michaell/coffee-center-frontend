import React, { useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaceQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/slices/cart";
import { toast } from "react-toastify";
import { addToWishlist, removeFromWishlist } from "../../store/slices/wishlist";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const isProductInWishlist = useSelector((state) =>
    state.wishlist.products.some((p) => p.id === item.id)
  );
  const [isHeartClicked, setHeartClicked] = useState(false);
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);
  const [isCartVisible, setCartVisibility] = useState(true);
  const session = useSelector((state) => state?.user?.shoppingSession?.id);
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.userInfo);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      borderRadius: "50%",
      height: "30px",
      width: "30px",
      backgroundColor: "var(--orange)",
      margin: "6px 6px",
      border: `2px solid ${theme.palette.background.paper}`,
    },
  }));

  const existing = cart.find((cartItem) => cartItem.product.id === item.id);
  useEffect(() => {
    const existing = cart.find((cartItem) => cartItem.product.id === item.id);

    if (existing) {
      setInvisible(true);
      setCartVisibility(false);
      setCount(existing.quantity);
    }
  }, [cart, item.id]);

  const handleDecrease = () => {
    if (count === 1) {
      setCount(0);
      const product = existing;
      setCartVisibility(true);
      disPatch(removeFromCart({ product, session }));
    } else {
      const product = existing;
      disPatch(decreaceQuantity({ product, session }));
      setCartVisibility(false);
    }
  };
  const handleIncrease = () => {
    const product = existing;
    disPatch(increaseQuantity({ product, session }));
  };
  const CustomToast = () => (
    <div>
      You should login first. <a href="/login/">Login now</a>
    </div>
  );

  const handleAddToCart = () => {
    if (user) {
      const product = item;
      disPatch(addToCart({ product, session }));
      setInvisible(true);
      setCartVisibility(false);
      setCount(1);
    } else {
      toast.info(<CustomToast />, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleHeart = () => {
    if (isProductInWishlist) {
      disPatch(removeFromWishlist(item.id));
    } else {
      disPatch(addToWishlist(item));
    }

    setHeartClicked(!isHeartClicked);
  };

  const handleDetails = (id) => {
    navigate(`/product/details/${item.id}`);
    window.location.reload();
  };

  return (
    <div className="mt-4">
      <div
        className="card text-start position-relative"
        style={{
          color: "var(--fff)",
          width: "270px",
          height: "400px",
          backgroundColor: "var(--gray2)",
          marginTop: "100px",
        }}
      >
        <img
          src={`http://127.0.0.1:8000${item?.image}`}
          className="mt-5 position-absolute top-0 start-50 translate-middle z-1"
          style={{ height: "250px", cursor: "pointer" }}
          alt="..."
          onClick={handleDetails}
        />
        <StyledBadge
          badgeContent={count}
          color="success"
          invisible={!invisible}
        >
          <div className="card-body " style={{ marginTop: "150px" }}>
            <button
              className={`border border-0 m-2 bi position-absolute ${isProductInWishlist ? "bi-heart-fill" : "bi-heart"} `}
              style={{
                top: "0px",
                left: "0px",
                color: "var(--orange)",
                fontSize: "23px",
                backgroundColor: "var(--gray2)",
              }}
              onClick={handleHeart}
            ></button>
            <h3
              className="card-title"
              style={{ color: "var(--orange)", cursor: "pointer" }}
              onClick={handleDetails}
            >
              {item?.name}
            </h3>
            <p
              className="card-text p-1 h-auto"
              style={{ fontSize: "15px", height: "60px" }}
            >
              {item?.desc}
            </p>
            <p className="text-decoration-line-through gray1">
              {item.price}EGP
            </p>

            {isCartVisible ? (
              <div className="d-flex justify-content-between mt-5 ">
                <h3 style={{ color: "var(--fff)" }} className="mt-2">
                  {
                    item.discount_percentage ?
                    Math.ceil((item?.price * (100 - item.discount_percentage)) / 100) : item?.price
                  }
                  EGP
                </h3>

                <button
                  style={{
                    backgroundColor: "var(--orange)",
                    color: "var(----fff)",
                    fontSize: "18px",
                  }}
                  onClick={handleAddToCart}
                  className="shadow  rounded-pill btn "
                >
                  Cart <i className="bi bi-cart3"></i>
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-around mt-5">
                <button
                  onClick={handleDecrease}
                  className="btn shadow  rounded rounded-pill "
                  style={{
                    height: "44px",
                    width: "62px",
                    backgroundColor: "var(--orange)",
                    fontSize: "20px",
                    color: "var(--fff)",
                  }}
                >
                  -
                </button>
                <h4 className="text-center mt-2 mx-2">
                  {
                    item.discount_percentage ?
                    Math.ceil((item?.price * (100 - item.discount_percentage)) / 100) : item?.price
                  }

                  EGP
                </h4>
                <button
                  onClick={handleIncrease}
                  className="btn shadow  rounded btn rounded-pill"
                  style={{
                    height: "44px",
                    width: "62px",
                    backgroundColor: "var(--orange)",
                    fontSize: "20px",
                    color: "var(--fff)",
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </StyledBadge>
      </div>
    </div>
  );
}
