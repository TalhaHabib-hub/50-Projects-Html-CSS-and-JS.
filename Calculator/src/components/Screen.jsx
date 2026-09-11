import styles from './Screen.module.css'

const Screen = ({screen}) => {
  return <input type="text" className={styles.screen }  readOnly value={screen}/>
}
export default Screen;