import React from 'react'
import { womanData } from '../Data/Woman'
import './Woman.css'
const Woman = () => {
  const firstFiveImages=womanData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Woman's Wear</h3>
      </div>
      <div className='woman'>
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

export default Woman
