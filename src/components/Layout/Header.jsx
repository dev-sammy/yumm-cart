import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import CheckoutForm from "../Checkout/CheckoutForm";
import { PURCHASE_PROGRESS } from "../../constants/progress";
import { checkoutProgressActions } from "../../store/checkout-progress-slice";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  
  const onCartClick = () => {
    dispatch(checkoutProgressActions.setCurrentStep(PURCHASE_PROGRESS.CART));
  };

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="React Food logo" />
          <h1>Food Station</h1>
        </div>
        <button type="button" className="text-button" onClick={onCartClick}>
          Cart ({cartItems.length})
        </button>
      </header>
      <Cart/>
      <CheckoutForm/>
    </>
  );
};

export default Header;
