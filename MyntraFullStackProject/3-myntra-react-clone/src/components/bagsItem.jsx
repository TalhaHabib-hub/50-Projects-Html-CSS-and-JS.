import theImage from '../../public/images/3.jpg'


const item = {
  company: 'TreeIntel',
  item_name: 'FullStack_website',
  current_price: 2342,
  original_price: 2324,
  discount_percentage:56,
  return_period: 3,
  delivery_date:'12/3/2026'
}

const BagItems = () => {
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={theImage} />
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

      <div className="remove-from-cart" onClick={()=>console.log('item is remove from bag')}>
        X
      </div>
    </div>
  );
};
export default BagItems;
