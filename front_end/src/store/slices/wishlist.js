import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: [],
    count: 0,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.products.push(action.payload);
      state.count = state.products.length;
    },
    removeFromWishlist: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      state.count = state.products.length;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
