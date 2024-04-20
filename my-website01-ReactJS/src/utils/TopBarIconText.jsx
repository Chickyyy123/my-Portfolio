import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopBarIconText = ({ icon, text, className, website }) => {
  return (
    <div>
      <div className="d-flex gap-2">
        <FontAwesomeIcon icon={icon} className={className} />
        <p className="fs-6 pt-3">{text}</p>
      </div>
    </div>
  );
};

export default TopBarIconText;
