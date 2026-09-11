import Items from './Items.jsx'
const  ListofItems= ({ list, HandleRemove, HandleBuy,focusedItem }) => {
 
  return (
    <ul className="list-group">
  {list.map((item) => (
    <Items key={item} item={item} HandleBuy={HandleBuy} HandleRemove={HandleRemove} focusedItem={ focusedItem} />
  ))}
</ul>
  )
} 
export default ListofItems