import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += +action.payload.price; 
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === itemId
      );
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
      }

      state.totalPrice -= +existingItem.price; 
    },
    deleteCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});


export default cartSlice.reducer;

export const cartActions = cartSlice.actions;