import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import {
  decreaceQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../store/slices/cart";

export default function Counter(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  const exsisting = cart.find((item) => item.id === product.id);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100 text-nowrap flex-wrap ">
        <div className="d-flex align-items-center">
          <button
            className="fs-5 gray1 p-2 border-0 bg-transparent"
            onClick={() => dispatch(decreaceQuantity(product))}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="fff fs-3 p-2 ">{exsisting.quantity}</p>
          <button
            className="fs-5 orange p-2 border-0 bg-transparent"
            onClick={() => dispatch(increaseQuantity(product))}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className="fs-4 px-3 gray1 border-0 bg-transparent"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className="d-flex flex-column">
          <p className="fff text-decoration-line-through">
            {exsisting.price * exsisting.quantity} EGP
          </p>
          <p className="fff">
            {(exsisting.price *
              exsisting.quantity *
              (100 - exsisting.discount)) /
              100}{" "}
            EGP
          </p>
        </div>
      </div>
    </>
  );
}
