import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart';
import userSlice from './slices/user';
import wishlistReducer from './slices/wishlist';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    wishlist: wishlistReducer,
  },
});

export default store;