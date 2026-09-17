import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import 'boxicons'

//Nafees 

function App() {
  let [currtime, setcurrtime] = useState(new Date())
  
useEffect(() => {
  const intervalId = setInterval(() => {
    setcurrtime(new Date())
  }, 1000);
  
  return () => clearInterval(intervalId);// when the components die there is no need to use currtime useSatate

},[])

  return (
    <center className='center'><h1>The Current time is :{currtime.toLocaleDateString()} -{' '} { currtime.toLocaleTimeString()}</h1></center>
  )
  
}

export default App;

/*Sir is saying to talk about hooks like useCallback (it is chacha ka bacha of useEffect) */
