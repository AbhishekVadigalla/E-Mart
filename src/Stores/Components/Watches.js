import React from 'react'
import { watchData } from '../Data/Watches'
import './Watches.css'
const Watches = () => {
  const firstFiveImages=watchData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Watches</h3>
      </div>
      <div className='Watches'>
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

export default Watches
