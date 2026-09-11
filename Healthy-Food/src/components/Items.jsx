import styles from "./Items.module.css";
const Items = ({ item, HandleBuy , HandleRemove, focusedItem}) => {
  return (
    <>
      <li className={`${styles.item} ${focusedItem.includes(item) && styles.focused}`}>
        {item}
        <button type="button" class={`btn btn-success ${styles.successButton}`} onClick={() => HandleRemove(item)}>
          skip
        </button>
        <button
          type="button"
          className={styles.warningButton}
          onClick={() => HandleBuy(item)}
        >
          buy
        </button>
      </li>
    </>
  );
};

export default Items;
