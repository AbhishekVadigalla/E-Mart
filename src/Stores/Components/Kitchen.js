import React from 'react'
import './Kitchen.css'
import { kitchenData } from '../Data/Kitchen'
const Kitchen = () => {
  const firstFiveImages=kitchenData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Kitchen</h3>
      </div>
      <div className='Kitchen'>
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

export default Kitchen
