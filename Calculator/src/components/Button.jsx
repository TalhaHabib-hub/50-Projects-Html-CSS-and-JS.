import styles from './Button.module.css'
function Button({i,handleclick}){
  return <button className={styles.button} onClick={()=>handleclick(i)}>{i}</button>
  
}
export default Button;