import React from 'react'
import { MobileData } from '../Data/Mobiles'
import './MobilePage.css'
const MobilePage = () => {
  return (
    <div style={{backgroundColor:'gray',minHeight:'100vh',paddingBottom:'2rem'}} className='container-fluid '>
      <div className='row'>
      {
        MobileData.map((item)=>{
          return(
            <div className='col-3 mt-5'>
              <div class="col-4" style={{width:'20rem',padding:'30px',backgroundColor:'lightgray',border:'solid gray', borderRadius:'2rem',marginLeft:'5%',cursor:'pointer'}}>
            <img style={{height:'340px'}} src={item.image} class="card-img-top" alt="Something went wrong..."/>
            <div class="card-body">
              <h5 class="card-title mt-3">Brand : {item.company}</h5>
              <h5 class="card-title mt-2">Model : {item.model}</h5>
              <a href="#" class="btn btn-primary mt-3">Add to Cart</a>
            </div>
          </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default MobilePage
