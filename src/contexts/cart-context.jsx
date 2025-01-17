import { createContext, useContext, useReducer } from "react";
import cartReducer, { cartInitialState } from "../store/reducer";
import CartActions from "../store/action";
import { currencyFormatter } from "../util/formatting";

/* Cart item state
 * name - name of the item
 * quantity - total quantity added for the same item
 * price - unit price
 * id - id of the item
 * */

const CartContext = createContext({
  cartItems: [],
  addToCartItems: () => {},
  getTotalCartPrice: () => "0.00",
  removeFromCart: () => {},
  deleteCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCartItems = (item) => {
    dispatch({
      type: CartActions.ADD_TO_CART, 
      item
    });
  };

  const getTotalCartPrice = () => {
    const price = cartState.cartItems.reduce((prev, curr) => {
      return prev + curr.quantity * Number(curr.price);
    }, 0);
    const formattedPrice = currencyFormatter.format(price);
    return formattedPrice;
  };

  const removeFromCart = (id) => {
    dispatch({
      type: CartActions.REMOVE_FROM_CART,
      id
    });
  };

  const deleteCart = () => {
    dispatch({
      type: CartActions.DELETE_CART
    });
  }

  const cartContextValue = {
    cartItems: cartState.cartItems,
    addToCartItems,
    getTotalCartPrice,
    removeFromCart,
    deleteCart
  }

  return (
    <CartContext.Provider
      value={cartContextValue}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartItems = () => {
  const { cartItems, addToCartItems, getTotalCartPrice, removeFromCart, deleteCart } =
    useContext(CartContext);
  return { cartItems, addToCartItems, getTotalCartPrice, removeFromCart, deleteCart };
};
