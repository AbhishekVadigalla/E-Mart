import React from 'react'
import './Category.css'
import { useNavigate } from 'react-router-dom'
const Category = () => {
  let Navigate=useNavigate()
  return (
    <div>
      <div className='category'>
          <h5 onClick={()=>Navigate('/MobilePage')}>Mobiles</h5>
          <h5 onClick={()=>Navigate('/ComputerPage')}>Computers</h5>
          <h5 onClick={()=>Navigate('/WatchesPage')}>watches</h5>
          <h5 onClick={()=>Navigate('/MensPage')}>Mens Wear</h5>
          <h5 onClick={()=>Navigate('/WomanPage')}>Woman Wear</h5>
          <h5 onClick={()=>Navigate('/FurniturePage')}>Furniture</h5>
          <h5 onClick={()=>Navigate('/KitchenPage')}>Kitchen</h5>
          <h5 onClick={()=>Navigate('/FridgePage')}>Fridge</h5>
          <h5 onClick={()=>Navigate('/ACPage')}>A/C</h5>
        </div>
    </div>
  )
}
export default Category
