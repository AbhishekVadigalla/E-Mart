import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <div style={{position:'fixed',top:'0',zIndex:'1',width:'100%'}}  className='nav-bar'>
          <div>
            <h4>E-Mart</h4>
          </div>
          <div>
            <input className='form-control' style={{borderWidth:'3px',borderColor:'lightblue',width:'300px'}} placeholder='Search'></input>
          </div>
          <div>
            <h4>SignIn/SignUp</h4>
          </div>
          <div>
            <h4>Cart</h4>
          </div>
        </div>
    </div>
  )
}

export default NavBar
