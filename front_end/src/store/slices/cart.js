import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../apis/config";
import { increaseAPI } from "../../apis/cartOperations/increase";
import { decreaseAPI } from "../../apis/cartOperations/decrease";
import { deleteAPI } from "../../apis/cartOperations/remove";

const INITIAL_STATE = {
  cartItems: [],
  maxItems: 100,
};

const cart = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    initialCart: (state, action) => {
      // console.log("payload",action.payload);
      action
        ? state.cartItems=[ ...action.payload ]
        : console.log(action.payload);
    },
    addToCart: (state, action) => {
      state.cartItems.length < state.maxItems
        ? state.cartItems.find((item) => item.id === action.payload.id)
          ? ///
            (state.cartItems.find(
              (item) => item.id === action.payload.id
            ).quantity += 1)
          : state.cartItems.push({ product:{...action.payload}, quantity: 1 })
        : ///
          alert(`Cart is full empty it first`);



    },

    removeFromCart: (state, action) => {
      const { product, session } = action.payload;
      state.cartItems = [
        ...state.cartItems.filter((item) => item.product.id !== product.product.id),
      ];
      deleteAPI(JSON.stringify(product.product),session)
    },

    increaseQuantity: (state, action) => {
      const { product, session } = action.payload;
      const exsistItem = state.cartItems.find(
        (item) => item.product.id === product.product.id
      );
      if (exsistItem) {
        // action.payload.stock > exsistItem.quantity
        true
          ? (exsistItem.quantity = parseInt(exsistItem.quantity) + 1)
          : alert("not enough quantity to increase quantity");
      } else alert("Add first to cart ");


     
      increaseAPI(JSON.stringify(exsistItem),session)


    },

    decreaceQuantity: (state, action) => {
      const { product, session } = action.payload;
      const exsistItem = state.cartItems.find(
        (item) => item.product.id === product.product.id
      );
      if (exsistItem.quantity > 1){
        (exsistItem.quantity -= 1)
        decreaseAPI(JSON.stringify(exsistItem),session)}
        else alert(
            "you can not decrease quantity more than once,  you can remove it"
          );
    },
  },
});

export const {initialCart, addToCart, removeFromCart, increaseQuantity, decreaceQuantity } =
  cart.actions;

export default cart.reducer;
