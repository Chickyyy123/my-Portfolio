import React from "react";
import AboutUsComp from "../../Components/HomeScreen/AboutUsComp";
import TeamMemberComp from "../../Components/HomeScreen/TeamMemberComp";
import VendorComp from "../../Components/HomeScreen/VendorComp";
import Navbar from "../../Components/Navbar/Navbar";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FooterComp from "../../Components/Footer/FooterComp";

const AboutScreen = () => {
  return (
    <div>
      <Navbar title="About Us" Home="Home" icon={faCircle}/>
      <AboutUsComp />
      <TeamMemberComp />
      <VendorComp />
      <FooterComp />
    </div>
  );
};

export default AboutScreen;
