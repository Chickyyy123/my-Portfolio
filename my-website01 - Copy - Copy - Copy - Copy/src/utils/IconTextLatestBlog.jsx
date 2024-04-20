import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconTextLatestBlog = ({ icon1, icon2, text1, text2 }) => {
  return (
    <>
      <div className="d-flex gap-5">
        <div className="d-flex">
          <FontAwesomeIcon icon={icon1} className="text-blue" />
          <small className="ms-2 text-secondary">{text1}</small>
        </div>
        <div className="d-flex">
          <FontAwesomeIcon icon={icon2} className="text-blue" />
          <small className="ms-2 text-secondary">{text2}</small>
        </div>
      </div>
    </>
  );
};

export default IconTextLatestBlog;
