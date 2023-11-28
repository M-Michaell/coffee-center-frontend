import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    addresses: [],
    payments: [],
    shoppingSession: [],
    wishlist:[]
  },
  reducers: {
    addAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    addPayments: (state, action) => {
      state.payments = action.payload;
    },
    addShoppingSession: (state, action) => {
      state.shoppingSession = action.payload;
    },
    addWishList: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { addAddresses, addPayments, addShoppingSession,addWishList } = userSlice.actions;

export default userSlice.reducer;
