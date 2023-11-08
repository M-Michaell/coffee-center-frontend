import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/Slices/cart";
import { useEffect, useState } from "react";

export default function CardBtn(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(cart.some((cartItem) => cartItem.id === item.id));
  }, [cart, item]);

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(addToCart(item));
    }
  };
  // console.log(cart);
  return (
    <>
      <button
        className={`rounded-pill w-75 p-2 fs-5 mx-auto  ${
          isInCart ? "btn btn-danger" : "btn btn-success"
        }`}
        onClick={handleClick}
      >
        {isInCart ? "Remove from Cart" : "Add To Cart"}
      </button>
    </>
  );
}
