import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlistSuccess,
  removeFromWishlistSuccess,
} from "../../store/slices/wishlist";
import { toast } from "react-toastify";

function Toggle(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist.products);
  const [isInList, setIsInList] = useState(false);
  const user = useSelector((state) => state.auth.userInfo);
  const wishlistId = useSelector((state) => state?.user?.wishlist?.id);
  useEffect(() => {
    setIsInList(wishList.some((listItem) => listItem.id === item.id));
  }, [wishList, item]);
  const CustomToast = () => (
    <div>
      You should login first. <a href="/login/">Login now</a>
    </div>
  );
  const handleHeart = () => {
    if (user) {
      if (!isInList) {
        dispatch(addToWishlistSuccess({ item, wishlistId }));
      } else {
        dispatch(removeFromWishlistSuccess({ item, wishlistId }));
      }
      setIsInList(!isInList);
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

  return (
    <>
      <button
        className={`border border-0 m-2 bi position-absolute bg-transparent z ${
          isInList ? "bi-heart-fill" : "bi-heart"
        } `}
        style={{
          top: "0px",
          left: "0px",
          color: "var(--orange)",
          cursor: "pointer",
          zIndex: "3",
        }}
        onClick={handleHeart}
      ></button>
    </>
  );
}

export default Toggle;