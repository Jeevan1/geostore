import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { itemAddedCartPopup } from "./stateSlice";
const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const { id, title, category, image, quantity, price } = action.payload;

      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        alert('Item already in cart');
        return [...state];
      }
      return [...state, { id, title, category, image, quantity, price }];
    },
    deleteCart(state, action) {
      const updatedCart = state.filter((curElem) => {
        return curElem.id !== action.payload;
      });
      return (state = updatedCart);
    },
    updatedCart(state, action) {
      const { id, quantity } = action.payload;
    //   const updatedQuantity = state.find((curElem) => {
    //     return curElem.id === id;
    //   });
    //   if (updatedQuantity) {
    //     // const idx = state.findIndex((curElem) => curElem.id === id);
    //     // console.log(idx)
    //     // state[idx] = {
    //     //   ...state[idx],
    //     //   quantity: quantity,
    //     // };
    //   }
    //   return state;
    state[id] = { ...state[id], quantity: quantity };
    },
  },
});

export default cartSlice.reducer;

export const { addCart, deleteCart, updatedCart } = cartSlice.actions;
