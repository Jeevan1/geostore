import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import stateSlice from "./slice/stateSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer: {
        products : productSlice,
        states: stateSlice,
        cartItem: cartSlice,
    }
});

export default store;