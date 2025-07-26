import React, { useState } from 'react'

const ShoppingList = () => {

    const [shop, setShop] = useState([{name:"",quantity:""}])
    
    const inputNameHandler=(e)=>{
      setShop(prevItems=> [...prevItems, {name: e.target.value, quantity: 2}])

    }
  return (
    <div>
      <form>
        <input type="text" onChange={inputNameHandler} placeholder='enter name'></input>
        <input type="text"  placeholder='enter quantity'></input>
      </form>
      <ul>
        {shop.map((item, index)=> <li index={index}>Name:{item.name}</li>)}
      </ul>
    </div>
  )
}

export default ShoppingList
