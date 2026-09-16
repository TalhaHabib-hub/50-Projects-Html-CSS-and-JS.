import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import 'boxicons'



function App() {
  let [currtime, setcurrtime] = useState(new Date())
  
useEffect(() => {
  const intervalId = setInterval(() => {
    setcurrtime(new Date())
  },1000)
},[])

  return (
    <center className='center'><h1>The Current time is :{currtime.toLocaleDateString()} -{' '} { currtime.toLocaleTimeString()}</h1></center>
  )
  
}

export default App;
