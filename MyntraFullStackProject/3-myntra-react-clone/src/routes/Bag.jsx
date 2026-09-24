import "../index.css";
import ItemsSummary from "../components/ItemsSummary";
import BagItems from "../components/bagsItem";

const Bag = () => {
  return (
    <main>
      <div className="bag-page" >
        <ItemsSummary/>
        <BagItems  />
        <BagItems  />
        <BagItems  />
        <BagItems  />
      </div>
    </main>
  );
};

export default Bag;
