import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import userSlice from "./slices/user";
import authReducer from './slices/auth';
import wishlistReducer from './slices/wishlist';


const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistReducer,
    user: userSlice ,
    auth: authReducer,
  },
});


export default store;

