import Modal from "../UI/Modal";
import OrderSuccess from "./OrderSuccess";
import Checkout from "./Checkout";
import { PURCHASE_PROGRESS } from "../../constants/progress";

import { API_URL } from "../../constants/apiUrl";
import { useDispatch, useSelector } from "react-redux";
import { checkoutOrderData, checkoutProgressActions } from "../../store/checkout-progress-slice";

const CheckoutForm = () => {
  const {cartItems, totalPrice} = useSelector(state => state.cart);
  const {currentStep, error, loading} = useSelector(state => state.progress);
  const dispatch = useDispatch();


  const onCheckoutFormSubmit = (event) => {
    event.preventDefault();
    const formDataObj = new FormData(event.target);
    const formEntries = Object.fromEntries(formDataObj.entries());

    const requestPayload = {
      order: {
        items: cartItems,
        customer: formEntries,
      },
    };

    submitOrderData(requestPayload);
    event.target.reset();
  };

  const submitOrderData = async (orderData) => {
    const requestConfig = {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch(checkoutOrderData({api: API_URL.order, payload: requestConfig}));
  };

  const onCloseCheckout = () => {
    dispatch(checkoutProgressActions.setCurrentStep(PURCHASE_PROGRESS.CLOSE));
  };

  return (
    <>
      <Modal
        open={currentStep === PURCHASE_PROGRESS.CHECKOUT}
      >
        {error && <p>{error}</p>}
        <Checkout
          totalPrice={totalPrice}
          onSubmit={onCheckoutFormSubmit}
          loading={loading}
          onClose={onCloseCheckout}
        />
      </Modal>
      <OrderSuccess />
    </>
  );
};

export default CheckoutForm;
