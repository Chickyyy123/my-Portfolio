import React from 'react'
import "../assets/css/utils.css"

const TitleLoader = ({className,classNames, title}) => {
  return (
    <>
      <h4 className={classNames}>{title}</h4>
      <div className={className}></div>
    </>
  );
}

export default TitleLoader