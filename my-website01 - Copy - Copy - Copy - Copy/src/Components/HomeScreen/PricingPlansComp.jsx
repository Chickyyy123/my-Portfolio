import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import CardUtils from "../../utils/CardUtils";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const PricingPlansComp = () => {
  return (
    <div>
      <div className="container mt-10rem mb-5">
        <div className="text-center">
          <SubtitleTitleRule
            subtitle="Pricing Plans"
            title="We are Offering Competitive Prices for Our Clients"
            classname="loader mx-auto"
          />
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12 p-0" data-aos="fade-up" data-aos-duraton="2600" data-aos-delay="400">
            <CardUtils
              background="bg-lightblue"
              subtitle="Basic Plan"
              paragraph="For Small Size Business"
              symbol="$"
              price="49.00"
              date="/Month"
              paragraph1="HTML5 & CSS3"
              paragraph2="Bootstrap v5"
              paragraph3="Responsive Layout"
              paragraph4="Cross-browser Support"
              icon1={faCheck}
              icon2={faCheck}
              icon3={faTimes}
              icon4={faTimes}
              color1="text-primary mt-1"
              color2="text-primary mt-1"
              color3="text-danger mt-1"
              color4="text-danger mt-1"
              button="Order Now"
            />
          </div>
          <div className="col-lg-4 col-md-12 p-0" data-aos="fade-up" data-aos-duraton="2000" data-aos-delay="200">
            <CardUtils
              background="shadow rounded"
              subtitle="Standard Plan"
              paragraph="For Medium Size Business"
              symbol="$"
              price="99.00"
              date="/Month"
              paragraph1="HTML5 & CSS3"
              paragraph2="Bootstrap v5"
              paragraph3="Responsive Layout"
              paragraph4="Cross-browser Support"
              icon1={faCheck}
              icon2={faCheck}
              icon3={faCheck}
              icon4={faTimes}
              color1="text-primary mt-1"
              color2="text-primary mt-1"
              color3="text-primary mt-1"
              color4="text-danger mt-1"
              button="Order Now"
            />
          </div>
          <div className="col-lg-4 col-md-12 p-0" data-aos="fade-up" data-aos-duraton="2700" data-aos-delay="300">
            <CardUtils
              background="bg-lightblue"
              subtitle="Advanced Plan"
              paragraph="For Large Size Business"
              symbol="$"
              price="149.00"
              date="/Month"
              paragraph1="HTML5 & CSS3"
              paragraph2="Bootstrap v5"
              paragraph3="Responsive Layout"
              paragraph4="Cross-browser Support"
              icon1={faCheck}
              icon2={faCheck}
              icon3={faCheck}
              icon4={faCheck}
              color1="text-primary mt-1"
              color2="text-primary mt-1"
              color3="text-primary mt-1"
              color4="text-primary mt-1"
              button="Order Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlansComp;
