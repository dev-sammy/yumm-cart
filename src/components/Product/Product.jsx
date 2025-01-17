import { useDispatch } from "react-redux";
import { currencyFormatter } from "../../util/formatting";
import { cartActions } from "../../store/cart-slice";

const Product = (item) => {
  const dispatch = useDispatch();
  const { description, image, name, price } = item;
  return (
    <li className="meal-item">
      <article className="article">
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <span className="meal-item-price">{currencyFormatter.format(price)}</span>
          <p className="meal-item-description ">{description}</p>
        </div>
        <div className="meal-item-actions">
          <button
            className="button"
            type="button"
            onClick={() => {
              dispatch(cartActions.addToCart(item));
            }}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
};

export default Product;
