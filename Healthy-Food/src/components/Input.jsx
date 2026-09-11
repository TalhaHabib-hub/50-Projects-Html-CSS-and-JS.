import styles from './Input.module.css'
const Input = ({ HandleAdd, handlechange}) => {
  return (
    
    <input type="text" placeholder="Enter item..." className={styles.input} onKeyDown={HandleAdd} onChange={handlechange}  />
   
  )
}

export default Input
