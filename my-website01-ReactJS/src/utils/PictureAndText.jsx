import React from "react";

const PictureAndText = ({image, text}) => {
  return (
    <>
      <div className="d-flex mb-3" style={{backgroundColor: "#eef9ff"}}>
        <img
          src={image}
          className="img-fluid"
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
        <p className="p-3">{text}</p>
      </div>
    </>
  );
};

export default PictureAndText;
