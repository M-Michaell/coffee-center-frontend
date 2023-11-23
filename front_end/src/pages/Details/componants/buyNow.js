import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaceQuantity, increaseQuantity, removeFromCart } from "../../../store/slices/cart";
import { toast } from "react-toastify";

export default function Buy({item}){

    const [invisible, setInvisible] = useState(false);
    const [isCartVisible, setCartVisibility] = useState(true);
    const session = useSelector((state) => state?.user?.shoppingSession?.id);
    const cart = useSelector((state) => state.cart.cartItems);
    const user = useSelector((state) => state.auth.userInfo);
    const [count, setCount] = useState(1);
    const disPatch = useDispatch();


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


    return(

<>

        {isCartVisible ? (
            <div className="d-flex justify-content-between mt-5 ">
              <h3 style={{ color: "var(--fff)" }} className="mt-2">
                {Math.ceil(item?.price *(100-item.discount_percentage)/100)} EGP
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
              <h3>{Math.ceil(item?.price * count*(100-item.discount_percentage)/100)} EGP</h3>
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
          </>


)

}
