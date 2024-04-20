import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconSubtitleParagraph = ({
  icon,
  className,
  classNames,
  subtitle,
  paragraph,
}) => {
  return (
    <div>
      <div className={classNames}>
        <FontAwesomeIcon icon={icon} className={className} />
      </div>
      <h4 className="mb-3 mt-3">{subtitle}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default IconSubtitleParagraph;
