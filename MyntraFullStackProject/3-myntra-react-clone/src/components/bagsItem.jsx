import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
import { FiTrash2 } from "react-icons/fi";

const BagItems = ({ item }) => {
  const dispatching = useDispatch();

  const handleRemove = () => {
    dispatching(bagSliceAction.removeFromBag(item.id));
  };
  return (
    <div className="bag-item-container" key={item.id}>
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} alt={item.item_name} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <button
        className="remove-from-cart"
        type="button"
        aria-label={`Remove ${item.item_name} from bag`}
        onClick={handleRemove}
      >
        <FiTrash2 />
      </button>
    </div>
  );
};
export default BagItems;
