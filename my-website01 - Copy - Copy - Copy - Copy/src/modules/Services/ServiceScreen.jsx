import React from "react";
import OurServicesComp from "../../Components/HomeScreen/OurServicesComp";
import Tesimonial from "../../Components/HomeScreen/Tesimonial";
import VendorComp from "../../Components/HomeScreen/VendorComp";
import Navbar from "../../Components/Navbar/Navbar";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FooterComp from "../../Components/Footer/FooterComp";

const ServiceScreen = () => {
  return (
    <div>
      <Navbar title="Services" Home="Home" icon={faCircle} />
      <OurServicesComp />
      <Tesimonial />
      <VendorComp />
      <FooterComp />
    </div>
  );
};

export default ServiceScreen;
