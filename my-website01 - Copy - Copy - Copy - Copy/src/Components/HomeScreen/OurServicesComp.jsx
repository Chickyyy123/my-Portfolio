import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import OurServicesUtils from "../../utils/OurServicesUtils";
import {
  faChartPie,
  faCode,
  faSearch,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const OurServicesComp = () => {
  return (
    <div>
      <div
        className=" mt-10rem container mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="text-center">
          <SubtitleTitleRule
            subtitle="Our Services"
            title="Custom IT Solutions for Your Successful Business"
            classname="loader mx-auto"
          />
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 mb-5" data-aos="zoom-in" data-aos-duration="500">
            <OurServicesUtils
              icon={faShieldAlt}
              subtitle="Cyber Security"
              paragraph="Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-5" data-aos="zoom-in" data-aos-duration="1000">
            <OurServicesUtils
              icon={faChartPie}
              subtitle="Data Analytics"
              paragraph="Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-5" data-aos="zoom-in" data-aos-duration="1500">
            <OurServicesUtils
              icon={faCode}
              subtitle="Web Development"
              paragraph="Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-5" data-aos="zoom-in" data-aos-duration="2000">
            <OurServicesUtils
              icon={faAndroid}
              subtitle="Apps Development"
              paragraph="Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-5" data-aos="zoom-in" data-aos-duration="2500">
            <OurServicesUtils
              icon={faSearch}
              subtitle="SEO Optimization"
              paragraph="Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-5" data-aos="zoom-in" data-aos-duration="3000">
            <div className=" bg-blue text-center p-5 text-white">
              <h4 className="mb-4">Call Us For Quote</h4>
              <p className="mb-4 fs-5 text-white">
                Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
                magna stet eirmod
              </p>
              <h2 className="mb-4">+012 345 6789</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesComp;
