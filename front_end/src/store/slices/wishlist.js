import { createSlice } from "@reduxjs/toolkit";
import {
  addToWishListAPI,
  deleteFromWishlistAPI,
} from "../../apis/product_details/wishlist";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: [],
    count: 0,
  },
  reducers: {
    initialWishList: (state, action) => {
      action
        ? (state.products = [...action.payload])
        : console.log(action.payload);
    },

    addToWishlistSuccess: (state, action) => {
      const { item, wishlistId } = action.payload;
      addToWishListAPI(item, wishlistId);
      state.products.push(item);
    },
    removeFromWishlistSuccess: (state, action) => {
      const { item, wishlistId } = action.payload;
      deleteFromWishlistAPI(item, wishlistId);
      state.products = state.products.filter(
        (product) => product.id !== item.id
      );
    },
  },
});

export const {
  addToWishlistSuccess,
  removeFromWishlistSuccess,
  initialWishList,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
