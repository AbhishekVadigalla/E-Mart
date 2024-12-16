import React from 'react'
import { furnitureData } from '../Data/Furniture'
import './Furniture.css'
const Furniture = () => {
  const firstFiveImages=furnitureData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Furniture</h3>
      </div>
      <div className='Furniture'>
        {
          firstFiveImages.map((item)=>{
            return(
              <div className='imageBox'>
                <img className='proImage' src={item.image} alt='Something went wrong...'/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Furniture
