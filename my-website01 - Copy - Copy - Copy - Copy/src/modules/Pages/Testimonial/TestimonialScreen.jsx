import React from 'react'
import Tesimonial from '../../../Components/HomeScreen/Tesimonial'
import VendorComp from '../../../Components/HomeScreen/VendorComp'
import Navbar from '../../../Components/Navbar/Navbar'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import FooterComp from '../../../Components/Footer/FooterComp'

const TestimonialScreen = () => {
  return (
    <div>
      <Navbar title="Tesimonial" Home="Home" icon={faCircle}/>
      <Tesimonial/>
      <VendorComp/>
      <FooterComp/>
    </div>
  )
}

export default TestimonialScreen