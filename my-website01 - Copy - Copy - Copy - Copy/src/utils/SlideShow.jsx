import React from "react";
import Image from "./Image";

const SlideShows = ({ client, profession, text, image }) => {
  return (
    <>
      <div className=" bg-lightblue">
        <div className="d-flex justify-content-center align-items-center px-5 pt-5 gap-3">
          <div style={{ width: "80px", height: "80px" }}>
            <Image image={image} className=" img-fluid" />
          </div>
          <div className="text-start">
            <h5 className=" text-blue">{client}</h5>
            <p>{profession}</p>
          </div>
        </div>
        <hr />
        <p className="text-start px-5 mb-5">{text}</p>
      </div>
    </>
  );
};

export default SlideShows;
