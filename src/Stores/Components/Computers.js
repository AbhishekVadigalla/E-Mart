import React from 'react'
import './Computers.css'
import { computerData } from '../Data/Computers'
const Computers = () => {
  const firstFiveImages=computerData.slice(0,5)
  return (
    <>
      <div style={{backgroundColor:'lightblue',padding:'0.3rem'}}>
        <h3>Computers</h3>
      </div>
      <div className='computers'>
      {firstFiveImages.map((item)=>{
        return(
          <div className='imageBox'>
            <img className='proImage' src={item.image} alt='Something went wrong...'/>
          </div>
        )
      })
      }
    </div>
    </>
    
  )
}
export default Computers
