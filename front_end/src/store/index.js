import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import userSlice from "./slices/user";

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice ,
  },
});
