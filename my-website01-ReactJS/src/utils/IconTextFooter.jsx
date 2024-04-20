import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconTextFooter = ({icon, text}) => {
  return (
    <>
      <div className=" d-flex gap-3">
        <FontAwesomeIcon icon={icon} className="text-blue fs-5 mt-2" />
        <p className="fs-5 text-white">{text}</p>
      </div>
    </>
  );
};

export default IconTextFooter;
