import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Heading from './components/Heading.jsx'
import List from './components/List.jsx'
import Holder from './components/Holder.jsx'
import {useState} from 'react'
import Input from './components/Input.jsx'

function App() {
   const [ListofItem,setListofItem]  = useState(['Aloo', 'Paratha', 'chawal', 'Daal', 'Kabaab']);
   
  const [newItem, setnewItem] = useState("");
  const [show,setShow] = useState("");
  const handlechange = (event) => {
    setnewItem(event.target.value);
  }
  const [warnmessage, setwarnmessage] = useState('');
  
  const HandleAdd = (event) => {
    if (newItem !== "" && event.key === "Enter") {
      if (!(ListofItem.includes(newItem))) {
        setListofItem([...ListofItem, newItem]);
        setnewItem("");
        event.target.value = "";
        setwarnmessage('');
      } else {
        setwarnmessage('Item already exists!')
      }
    }
  }
   
  const HandleRemove = (itemToRemove) => { 
    setListofItem(ListofItem.filter((item) => item !== itemToRemove));
  }


  const [focusedItem, setfocusedItem] = useState([]);
  const [allItem,setAllItem] = useState([])
  
  const HandleBuy = (itemToBuy) => {
    setAllItem([...allItem, itemToBuy]);
    setfocusedItem([itemToBuy])   
    if (allItem.includes(itemToBuy) == false) {   
      setShow([...show, ", " + itemToBuy]);
    }

  }

  return (
    <Holder>
      <Heading />
      <Input HandleAdd={HandleAdd} handlechange={handlechange} />
      <p>{warnmessage}</p>
      <p>you bought {show}</p>
      <List list={ListofItem} HandleRemove={HandleRemove} HandleBuy={HandleBuy} focusedItem={focusedItem} />
    </Holder>
  )
}

export default App
