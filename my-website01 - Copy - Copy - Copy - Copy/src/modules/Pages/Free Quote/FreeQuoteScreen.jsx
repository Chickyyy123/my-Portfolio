import React from "react";
import RequestAQuoteComp from "../../../Components/HomeScreen/RequestAQuoteComp";
import VendorComp from "../../../Components/HomeScreen/VendorComp";
import Navbar from "../../../Components/Navbar/Navbar";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FooterComp from "../../../Components/Footer/FooterComp";

const FreeQuoteScreen = () => {
  return (
    <div>
      <Navbar title="Free Quote" Home="Home" icon={faCircle} />
      <RequestAQuoteComp />
      <VendorComp />
      <FooterComp />
    </div>
  );
};

export default FreeQuoteScreen;
