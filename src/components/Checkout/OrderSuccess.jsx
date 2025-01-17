import Modal from "../UI/Modal";
import { PURCHASE_PROGRESS } from "../../constants/progress";
import { useDispatch, useSelector } from "react-redux";
import { checkoutProgressActions } from "../../store/checkout-progress-slice";
import { cartActions } from "../../store/cart-slice";

const OrderSuccess = () => {
  const {currentStep} = useSelector(state => state.progress);
  const dispatch = useDispatch();

  const onCloseSuccssAlert = () => {
    dispatch(cartActions.deleteCart());
    dispatch(checkoutProgressActions.setCurrentStep(PURCHASE_PROGRESS.CLOSE));
  }

  return (
    <Modal open={currentStep === PURCHASE_PROGRESS.ORDER_SUCCESS} onModalClose={onCloseSuccssAlert}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button
          className="button"
          autoFocus
          onClick={onCloseSuccssAlert}
        >
          Okay
        </button>
      </div>
    </Modal>
  );
};

export default OrderSuccess;
