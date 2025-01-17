import CartActions from "./action";

export const cartInitialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART: {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.item.id
      );

      const updatedCartItems = [...state.cartItems];

      if (existingCartItemIndex > -1) {
        updatedCartItems[existingCartItemIndex] = {
          ...state.cartItems[existingCartItemIndex],
          quantity: state.cartItems[existingCartItemIndex].quantity + 1,
        };
      } else {
        updatedCartItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, cartItems: updatedCartItems };
    }

    case CartActions.REMOVE_FROM_CART: {
      const updatedCartItems = [...state.cartItems];
      const selectedItemIndex = updatedCartItems.findIndex(
        (item) => item.id === action.id
      );

      if (updatedCartItems[selectedItemIndex].quantity === 1) {
        updatedCartItems.splice(selectedItemIndex, 1);
      } else {
        updatedCartItems[selectedItemIndex] = {
          ...state.cartItems[selectedItemIndex],
          quantity: state.cartItems[selectedItemIndex].quantity - 1,
        };
      }

      return { ...state, cartItems: updatedCartItems };
    }

    case CartActions.DELETE_CART: {
        return {...state, cartItems: []};
    }

    default:
      return state;
  }
};

export default cartReducer;
