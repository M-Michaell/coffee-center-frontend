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
  const session = useSelector((state) => state?.user?.shoppingSession?.id);

  const exsisting = cart.find((item) => item.product.id === product.product.id);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100 text-nowrap flex-wrap ">
        <div className="d-flex align-items-center">
          <button
            className="fs-5 gray1 p-2 border-0 bg-transparent"
            onClick={() => dispatch(decreaceQuantity({ product, session }))}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="fff fs-3 p-2 mb-0 ">{exsisting.quantity}</p>
          <button
            className="fs-5 orange p-2 border-0 bg-transparent"
            onClick={() => dispatch(increaseQuantity({ product, session }))}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className="fs-4 px-3 gray1 border-0 bg-transparent"
            onClick={() => dispatch(removeFromCart({ product, session }))}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <div className="d-flex flex-column">
          <p className="fff text-decoration-line-through">
            {exsisting.product.price * exsisting.quantity} EGP
          </p>
          <p className="fff">
            {(exsisting.product.price *
              exsisting.quantity *
              (100 - exsisting.product.discount_percentage)) /
              100}{" "}
            EGP
          </p>
        </div>
      </div>
    </>
  );
}
