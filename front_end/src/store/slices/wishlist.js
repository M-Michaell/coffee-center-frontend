import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/accounts/api/wishlist';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: [],
    count: 0,
  },
  reducers: {
    addToWishlistSuccess: (state, action) => {
      const { user, product } = action.payload;
      state.products.push({ user: user.id, product: product.id });
    },
    
    removeFromWishlistSuccess: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(item => item.product !== productId);
    },
  },
});

export const { addToWishlistSuccess, removeFromWishlistSuccess } = wishlistSlice.actions;
export default wishlistSlice.reducer;

// Async action for adding an item to the wishlist
export const addToWishlist = (wishlistData) => async (dispatch) => {
  try {
    console.log('Adding to wishlist:', wishlistData);
    const response = await axios.post(BASE_URL, wishlistData);
    console.log('Response from server:', response.data);
    dispatch(addToWishlistSuccess(wishlistData));
  } catch (error) {
    console.error('Error adding to wishlist:', error);
  }
};

// Async action for removing an item from the wishlist
export const removeFromWishlist = (productId) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/${productId}`);
    dispatch(removeFromWishlistSuccess(productId));
  } catch (error) {
    console.error('Error removing from wishlist:', error);
  }
};
