import React from "react";

const TagUtil = ({tagName, className}) => {
  return (
    <div style={{marginBottom: "30px"}}>
      <div className="fw-bold bg-lightblue d-inline px-4 py-3">{tagName}</div>
    </div>
  );
};

export default TagUtil;
