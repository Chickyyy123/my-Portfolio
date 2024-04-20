import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconTextNumber = ({ text, number, icon }) => {
  return (
    <div>
      <div className="d-flex gap-3">
        <div className="blue-icon d-flex justify-content-center align-items-center rounded-1">
          <FontAwesomeIcon icon={icon} className="fs-5 text-white" />
        </div>
        <div>
          <p className="text-dark fs-5 mt-5px">{text}</p>
          <h5 className="text-blue mt-10px">{number}</h5>
        </div>
      </div>
    </div>
  );
};

export default IconTextNumber;
