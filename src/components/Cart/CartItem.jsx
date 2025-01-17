import { currencyFormatter } from "../../util/formatting";

const CartItem = ({ onIncrease, onDecrease, ...props }) => {
  return (
    <li>
      <div className="cart-item">
        <p>
          {props.name} - {props.quantity} x{" "}
          {currencyFormatter.format(props.price)}
        </p>
        <div className="cart-item-actions">
          <button onClick={onDecrease}>-</button>
          <span>{props.quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
