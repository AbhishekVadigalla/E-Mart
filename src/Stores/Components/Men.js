import React from 'react'
import { menData } from '../Data/Men'
import './Men.css'
const Men = () => {
  const firstFiveImages=menData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Men's Wear</h3>
      </div>
      <div className='menFashion'>
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

export default Men
