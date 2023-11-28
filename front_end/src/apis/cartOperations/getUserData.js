import { axiosInstance } from "../config";
import { toast } from "react-toastify";
import {
  addAddresses,
  addPayments,
  addShoppingSession,
  addWishList,
} from "../../store/slices/user";
import { initialCart } from "../../store/slices/cart";
import { initialWishList } from "../../store/slices/wishlist";

export async function UserDataAPI(userId, dispatch) {
  try {
    const response = await axiosInstance.get(`/cart/user-data/${userId}`);
    const userData = response.data;

    const addresses = userData.addresses;
    const payments = userData.payments;
    const shoppingSession = userData.session;
    const wishlist = userData.wishlist;
    dispatch(addAddresses(addresses));
    dispatch(addPayments(payments));
    dispatch(addShoppingSession(shoppingSession));
    dispatch(addWishList(wishlist));

    const transformedCartItems = shoppingSession.cart_items.map((cartItem) => ({
      product: cartItem.product,
      quantity:
        cartItem.quantity >= cartItem.product.quantity
          ? cartItem.product.quantity
          : cartItem.quantity,
    }));

    const wishlistItems = wishlist.wishlist_item;
    const wishlistProducts = wishlistItems.map((item) => item.product);
    dispatch(initialWishList(wishlistProducts));

    dispatch(initialCart(transformedCartItems));
  } catch (error) {
    toast.error("Error happened when loading", {
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
}
