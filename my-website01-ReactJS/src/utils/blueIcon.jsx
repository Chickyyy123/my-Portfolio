import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BlueIcon = ({ icon }) => {
  return (
    <div className="blue-icon d-flex justify-content-center align-items-center rounded-1">
      <FontAwesomeIcon icon={icon} className=" text-white fs-5 " />
    </div>
  );
};

export default BlueIcon;
