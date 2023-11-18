import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    addresses: [],
    payments: [],
    shoppingSession: [],
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
  },
});

export const { addAddresses, addPayments, addShoppingSession } = userSlice.actions;

export default userSlice.reducer;
