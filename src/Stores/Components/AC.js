import React from 'react'
import { acData } from '../Data/AC'
import './AC.css'
const AC = () => {
  const firstFiveImages=acData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Furniture</h3>
      </div>
      <div className='AC'>
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

export default AC
