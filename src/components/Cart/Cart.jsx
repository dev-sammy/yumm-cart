import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { PURCHASE_PROGRESS } from "../../constants/progress";
import { checkoutProgressActions } from "../../store/checkout-progress-slice";
import { cartActions } from "../../store/cart-slice";
import { currencyFormatter } from "../../util/formatting";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector(state => state.cart);
  const { currentStep } = useSelector(state => state.progress);
  const dispatch = useDispatch();

  const onCheckout = () => {
    dispatch(checkoutProgressActions.setCurrentStep(PURCHASE_PROGRESS.CHECKOUT));
  };

  const onCloseCart = () => {
    dispatch(checkoutProgressActions.setCurrentStep(PURCHASE_PROGRESS.CLOSE));
  }

  return (
    <Modal open={currentStep === PURCHASE_PROGRESS.CART} onModalClose={currentStep === PURCHASE_PROGRESS.CART ? onCloseCart : null}>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onIncrease={() => dispatch(cartActions.addToCart(item))}
                onDecrease={() => dispatch(cartActions.removeFromCart(item.id))}
              />
            ))}
          </ul>
        ) : (
          <p>You have not added any items in your cart.</p>
        )}
        <div className="cart-total">{currencyFormatter.format(totalPrice)}</div>
      </div>
      <div className="modal-actions">
        <button
          className="text-button"
          type="button"
          autoFocus
          onClick={onCloseCart}
        >
          Close
        </button>
        {cartItems.length > 0 && (
          <button
            type="button"
            className="button"
            onClick={onCheckout}
            disabled={!cartItems.length}
          >
            Go to Checkout
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
