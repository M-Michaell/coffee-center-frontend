import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlistSuccess,
  removeFromWishlistSuccess,
} from "../../store/slices/wishlist";

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

  const handleHeart = () => {
    if (user) {
      if (!isInList) {
        dispatch(addToWishlistSuccess({ item, wishlistId }));
      } else {
        dispatch(removeFromWishlistSuccess({ item, wishlistId }));
      }
      setIsInList(!isInList);
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
          zIndex:"3"
        }}
        onClick={handleHeart}
      ></button>
    </>
  );
}

export default Toggle;
