import React from 'react'
import WhyChooseUsComp from '../../../Components/HomeScreen/WhyChooseUsComp'
import VendorComp from '../../../Components/HomeScreen/VendorComp'
import Navbar from '../../../Components/Navbar/Navbar'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import FooterComp from '../../../Components/Footer/FooterComp'

const OurFeaturesScreen = () => {
  return (
    <div>
      <Navbar title="Features" Home="Home" icon={faCircle}/>
      <WhyChooseUsComp/>
      <VendorComp/>
      <FooterComp/>
    </div>
  )
}

export default OurFeaturesScreen