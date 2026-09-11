import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import Button from './components/Button.jsx'
import Screen from './components/Screen.jsx'
import Holder from './components/Holder.jsx'

function App() {
  let numbers = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '=', '.', '0']
  
  const [screen, setScreen] = useState('');
  
  const handleclick = (i) => {
    if (i === '=') {
      setScreen(eval(screen));
    } else if(i === 'C'){
      setScreen('');
    } else{
      setScreen(screen + i)
      }
  }
  return <Holder>
    <Screen screen={screen} />
    {numbers.map((i) => <Button i={i} handleclick={handleclick} />)}
         </Holder>
 
}

export default App
