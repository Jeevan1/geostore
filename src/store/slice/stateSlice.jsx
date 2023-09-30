import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: false,
    cartAddedPopUp: {
        active: false,
        item: '',
    },
    search_bar: false,
    
}

const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        activeCart(state, action){
            return {...state, cart: true};
        },
        noActiveCart(state,action) {
            return {...state, cart: false};
        },
        itemAddedCartPopup(state,action) {
            const {active, item} = action.payload;
            return {...state, cartAddedPopUp:{active,item}}
        },
        activeSearch(state, action){
            const active = action.payload;
            return {...state, search_bar: active};
        },
    }
});

export default stateSlice.reducer;

export const {activeCart, noActiveCart, itemAddedCartPopup, activeSearch} = stateSlice.actions;