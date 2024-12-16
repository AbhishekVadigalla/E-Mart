import React from 'react'
import NavBar from '../Components/NavBar'
import category from '../Components/Category'
import Mobiles from '../Components/Mobiles'
import Category from '../Components/Category'
import Products from '../Components/Products'
import Computers from '../Components/Computers'
import Watches from '../Components/Watches'
import Men from '../Components/Men'
import Woman from '../Components/Woman'
import Kitchen from '../Components/Kitchen'
import Furniture from '../Components/Furniture'
import AC from '../Components/AC'
import Fridge from '../Components/Fridge'
const LandingPage = () => {
  return (
    <div>
      <NavBar/>
      <Category/>
      <Products/>
      <Computers/>
      <Watches/>
      <Men/>
      <Woman/>
      <Kitchen/>
      <Furniture/>
      <AC/>
      <Fridge/>
    </div>
  )
}
export default LandingPage
