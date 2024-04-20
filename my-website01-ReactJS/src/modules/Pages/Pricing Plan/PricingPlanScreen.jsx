import React from "react";
import PricingPlansComp from "../../../Components/HomeScreen/PricingPlansComp";
import RequestAQuoteComp from "../../../Components/HomeScreen/RequestAQuoteComp";
import VendorComp from "../../../Components/HomeScreen/VendorComp";
import Navbar from "../../../Components/Navbar/Navbar";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FooterComp from "../../../Components/Footer/FooterComp";

const PricingPlanScreen = () => {
  return (
    <div>
      <Navbar title="Prices" Home="Home" icon={faCircle} />
      <PricingPlansComp />
      <RequestAQuoteComp />
      <VendorComp />
      <FooterComp />
    </div>
  );
};

export default PricingPlanScreen;
