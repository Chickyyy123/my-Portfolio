import React from "react";
import "../../assets/css/utils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({title, icon, Home}) => {
  return (
    <>
      <div className="bg-header">
        <div className="row">
          <div
            className="col-12 text-white text-center py-5"
            style={{ marginBottom: "90px" }}
          >
            <div className="mt-5">
              <h1 className="mt-5 mb-3">{title}</h1>
              <a href="#noPage" className=" text-decoration-none fs-5 text-white">
                {Home}
              </a>
              <FontAwesomeIcon icon={icon} className="mx-3"/>
              <a href="#noPage" className=" text-decoration-none fs-5 text-white">
                {title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
