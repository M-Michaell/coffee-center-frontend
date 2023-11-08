import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartItems: [
    {
      id: "1",
      name: "egyption coffee",
      desc: "coffee with premuim test",
      quantity: "1",
      price: "100",
      discount: "25",
    },
    {
      id: "2",
      name: "egyption coffee",
      desc: "coffee with premuim test",
      quantity: "1",
      price: "100",
      discount: "25",
    },
    {
      id: "3",
      name: "egyption coffee",
      desc: "coffee with premuim test",
      quantity: "1",
      price: "100",
      discount: "25",
    },
    {
      id: "4",
      name: "egyption coffee",
      desc: "coffee with premuim test",
      quantity: "1",
      price: "100",
      discount: "25",
    },
  ],
  maxItems: 100,
};

const cart = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.length < state.maxItems
        ? state.cartItems.find((item) => item.id === action.payload.id)
          ? ///
            (state.cartItems.find(
              (item) => item.id === action.payload.id
            ).quantity += 1)
          : state.cartItems.push({ ...action.payload, quantity: 1 })
        : ///
          alert(`Cart is full empty it first`);
    },

    removeFromCart: (state, action) => {
      state.cartItems = [
        ...state.cartItems.filter((item) => item.id !== action.payload.id),
      ];
    },

    increaseQuantity: (state, action) => {
      const exsistItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (exsistItem) {
        // action.payload.stock > exsistItem.quantity
        true
          ? (exsistItem.quantity = parseInt(exsistItem.quantity) + 1)
          : alert("not enough quantity to increase quantity");
      } else alert("Add first to cart ");
    },

    decreaceQuantity: (state, action) => {
      const exsistItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      exsistItem.quantity > 1
        ? (exsistItem.quantity -= 1)
        : alert(
            "you can not decrease quantity more than once,  you can remove it"
          );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaceQuantity } =
  cart.actions;

export default cart.reducer;
