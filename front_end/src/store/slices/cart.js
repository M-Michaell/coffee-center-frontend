import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../apis/config";
import { increaseAPI } from "../../apis/cartOperations/increase";
import { decreaseAPI } from "../../apis/cartOperations/decrease";
import { deleteAPI } from "../../apis/cartOperations/remove";
import { addToCartAPI } from "../../apis/cartOperations/addtocart";
import { toast } from "react-toastify";

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
        ? (state.cartItems = [...action.payload])
        : console.log(action.payload);
    },

    addToCart: (state, action) => {
      const { product,session } = action.payload;
      console.log(product);
      // console.log(session);
      // Check if the cart is not full
      if (state.cartItems.length < state.maxItems) {
        const item={ product: { ...product }, quantity: 1 }
          state.cartItems.push(item);
          addToCartAPI(item, session)
      } else {
        // If the cart is full, show an alert
        alert(`Cart is full, empty it first`);
      }
    },

    removeFromCart: (state, action) => {
      const { product, session } = action.payload;
      state.cartItems = [
        ...state.cartItems.filter(
          (item) => item.product.id !== product.product.id
        ),
      ];
      deleteAPI(JSON.stringify(product.product), session);
    },

    increaseQuantity: (state, action) => {
      const { product, session } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product.id === product.product.id
      );
    
      if (existingItem) {
        const newQuantity = parseInt(existingItem.quantity) + 1;
    
        if (newQuantity <= product.product.quantity) {
          existingItem.quantity = newQuantity;
    
          increaseAPI(JSON.stringify(existingItem), session);
        } else {
          toast.info("Not enough quantity to increase", 
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
        }
      } else {
        alert("Add to cart first");
      }
    },
    

    decreaceQuantity: (state, action) => {
      const { product, session } = action.payload;
      console.log("product",action.payload);
      const exsistItem = state.cartItems.find(
        (item) => item.product.id === product.product.id
      );
      if (exsistItem.quantity > 1) {
        exsistItem.quantity -= 1;
        decreaseAPI(JSON.stringify(exsistItem), session);
      } else
        toast.info("you can not decrease quantity more than once,  you can remove it", 
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
    },
  },
});

export const {
  initialCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaceQuantity,
} = cart.actions;

export default cart.reducer;
