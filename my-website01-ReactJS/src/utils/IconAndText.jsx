import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconAndText = ({ iconStyle, icon, paragraghStyle, text }) => {
  return (
    <div>
      <div className="d-flex gap-4">
        <FontAwesomeIcon icon={icon} className={iconStyle} />
        <p className={paragraghStyle}>{text}</p>
      </div>
    </div>
  );
};

export default IconAndText;
