import React from "react";
import TeamMemberComp from "../../../Components/HomeScreen/TeamMemberComp";
import VendorComp from "../../../Components/HomeScreen/VendorComp";
import Navbar from "../../../Components/Navbar/Navbar";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FooterComp from "../../../Components/Footer/FooterComp";

const TeamMemberScreen = () => {
  return (
    <div>
      <Navbar title="Team Members" Home="Home" icon={faCircle} />
      <TeamMemberComp />
      <VendorComp />
      <FooterComp />
    </div>
  );
};

export default TeamMemberScreen;
