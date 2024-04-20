import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurServicesUtils = ({ subtitle, paragraph, icon }) => {
  return (
    <div>
      <div className=" bg-lightblue text-center p-5 icon-hover-relative">
        <div className="blue-icon-45deg d-flex justify-content-center align-items-center fs-4 text-white mx-auto mb-5 ">
          <FontAwesomeIcon icon={icon} className="icon-45deg" />
        </div>
        <h5 className="mb-4">{subtitle}</h5>
        <p className="mb-4">{paragraph}</p>
        <div className="buttons d-flex justify-content-center align-items-center text-white fs-5 w-25 icon-hover-absolute">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default OurServicesUtils;
