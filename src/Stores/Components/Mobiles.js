import React from 'react'
import {MobileData} from '../Data/Mobiles'
import './Mobiles.css'
const Mobiles = () => {
  const firstFiveImages=MobileData.slice(0,5)
  return (
    <div>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Mobiles</h3>
      </div>
      <div className='mobiles'>
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

export default Mobiles
