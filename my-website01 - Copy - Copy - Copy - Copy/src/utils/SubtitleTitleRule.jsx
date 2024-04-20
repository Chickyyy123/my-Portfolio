import React from "react";

const SubtitleTitleRule = ({
  subtitle,
  title,
  classname,
  animated,
  delay,
  duration,
}) => {
  return (
    <div
      data-aos={animated}
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      <h4 className="text-blue">{subtitle}</h4>
      <h1>{title}</h1>
      <div className={classname} style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default SubtitleTitleRule;
