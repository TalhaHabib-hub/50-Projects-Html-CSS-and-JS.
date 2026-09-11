import styles from './Holder.module.css'
const Holder = (props) => {
  return <div className={styles.holder}>
  {props.children}
  </div>
}

export default Holder;