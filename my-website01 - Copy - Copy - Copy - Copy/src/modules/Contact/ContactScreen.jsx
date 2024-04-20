import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ContactUsComp from "../../Components/HomeScreen/ContactUsComp";
import VendorComp from "../../Components/HomeScreen/VendorComp";
import FooterComp from "../../Components/Footer/FooterComp";

const ContactScreen = () => {
  return (
    <div>
      <Navbar title="Contact Us" Home="Home" icon={faCircle} />
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <ContactUsComp />
        <VendorComp />
        <FooterComp />
      </div>
    </div>
  );
};

export default ContactScreen;
