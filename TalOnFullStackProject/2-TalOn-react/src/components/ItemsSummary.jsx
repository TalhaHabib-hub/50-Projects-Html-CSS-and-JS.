import { useSelector } from "react-redux";
import { FiArrowRight, FiShield } from "react-icons/fi";

const ItemsSummary = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  let MrpCounter = 0;
  let totalDiscountCounter = 0;
  let finalCounter = 0;
  const convinence = 99;

  items.forEach((each) => {
    if (bag.includes(each.id)) {
      MrpCounter += eval(each.current_price);
      totalDiscountCounter += eval(each.discount_percentage);
    }
    finalCounter = MrpCounter - totalDiscountCounter + convinence;
  });

  const bagsummary = {
    totalItem: bag.length,
    totalMRP: MrpCounter,
    totalDiscount: totalDiscountCounter,
    finalPayment: finalCounter,
  };
  return (
    <div className="summary-card">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagsummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">Rs{bagsummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -Rs{bagsummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">Rs{convinence}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">Rs{bagsummary.finalPayment}</span>
        </div>
      </div>
      <div className="secure-note">
        <FiShield /> Secure checkout
      </div>
      <button className="btn-place-order" type="button">
        <span>Continue to checkout</span>
        <FiArrowRight />
      </button>
    </div>
  );
};
export default ItemsSummary;
