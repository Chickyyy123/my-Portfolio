import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardUtils = ({
  background,
  subtitle,
  paragraph,
  price,
  symbol,
  date,
  paragraph1,
  icon1,
  paragraph2,
  icon2,
  paragraph3,
  icon3,
  paragraph4,
  icon4,
  button,
  color1,
  color2,
  color3,
  color4,
}) => {
  return (
    <div className={background}>
      <div className="px-5 pt-4">
        <h4 className="text-blue">{subtitle}</h4>
        <p>{paragraph}</p>
      </div>
      <hr />
      <div className="px-5 pt-3">
        <div className="d-flex">
          <h6 className="text-darkblue">{symbol}</h6>
          <h1 className="text-darkblue">
            {price}
            <span className="fs-6">{date}</span>
          </h1>
        </div>
        <div className="d-flex justify-content-between pt-3">
          <p>{paragraph1}</p>
          <FontAwesomeIcon icon={icon1} className={color1} />
        </div>
        <div className="d-flex justify-content-between">
          <p>{paragraph2}</p>
          <FontAwesomeIcon icon={icon2} className={color2} />
        </div>
        <div className="d-flex justify-content-between">
          <p>{paragraph3}</p>
          <FontAwesomeIcon icon={icon3} className={color3} />
        </div>
        <div className="d-flex justify-content-between">
          <p>{paragraph4}</p>
          <FontAwesomeIcon icon={icon4} className={color4} />
        </div>
        <button className="buttons px-4 py-2 mb-5 mt-3">{button}</button>
      </div>
    </div>
  );
};

export default CardUtils;
