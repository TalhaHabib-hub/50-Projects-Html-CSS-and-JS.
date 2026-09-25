import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
import { FaRegStar } from "react-icons/fa";
import { FiShoppingBag, FiTrash2 } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);

  const disptchIt = useDispatch();
  const handleAddBag = () => {
    disptchIt(bagSliceAction.addToBag(item.id));
  };
  const removeItem = () => {
    disptchIt(bagSliceAction.removeFromBag(item.id));
  };
  return (
    <div className="each-container">
      <div className="item-image-wrap">
        <img
          className="item-image"
          src={item.image}
          alt={item.item_name}
          style={{ height: "336px", objectFit: "cover" }}
        />
      </div>
      <div className="rating">
        {item.rating.stars} <FaRegStar /> | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bag.includes(item.id) ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          aria-label={`Remove ${item.item_name} from bag`}
          onClick={() => removeItem()}
        >
          <FiTrash2 />
          <span>Remove</span>
        </button>
      ) : (
        <button
          className="btn btn-success btn-add-bag"
          type="button"
          aria-label={`Add ${item.item_name} to bag`}
          onClick={() => handleAddBag()}
        >
          <FiShoppingBag />
          <span>Add to bag</span>
        </button>
      )}
    </div>
  );
};
export default HomeItem;
