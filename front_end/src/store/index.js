import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart";
import userSlice from "./slices/user";
import authReducer from './slices/auth';


export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice ,
    auth: authReducer,
  },
});