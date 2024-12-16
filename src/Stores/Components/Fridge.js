import React from 'react'
import { fridgeData } from '../Data/Fridge'
import './Fridge.css'
const Fridge= () => {
  const firstFiveImages=fridgeData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Fridge</h3>
      </div>
      <div className='Fridge'>
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

export default Fridge
