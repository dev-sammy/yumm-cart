import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import checkoutProgressReducer from "./checkout-progress-slice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        progress: checkoutProgressReducer
    },
});

export default store;