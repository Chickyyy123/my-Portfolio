import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import IconSubtitleParagraph from "../../utils/IconSubtitleParagraph";
import {
  faAward,
  faCubes,
  faPhone,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../../utils/Image";

const WhyChooseUsComp = () => {
  return (
    <div>
      <div
        className="mt-10rem container mb-5"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="text-center">
          <SubtitleTitleRule
            subtitle="Why Choose Us"
            title="We Are Here to Grow Your Business Exponentially"
            classname="loader mx-auto"
          />
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div
                className="col-12 mb-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <IconSubtitleParagraph
                  icon={faCubes}
                  classNames="text-white blue-icon d-flex justify-content-center align-items-center fs-4"
                  subtitle="Best In Industry"
                  paragraph="Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
                />
              </div>
              <div
                className="col-12 mb-3"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <IconSubtitleParagraph
                  icon={faAward}
                  classNames="text-white blue-icon d-flex justify-content-center align-items-center fs-4"
                  subtitle="Award Winning"
                  paragraph="Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
                />
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 my-lg-0 my-md-5 my-sm-0 my-0"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/feature.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
            <div className="row">
              <div
                className="col-12 mb-3"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <IconSubtitleParagraph
                  icon={faUserCog}
                  classNames="text-white blue-icon d-flex justify-content-center align-items-center fs-4"
                  subtitle="Professional Staff"
                  paragraph="Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
                />
              </div>
              <div
                className="col-12 mb-3"
                data-aos="zoom-in"
                data-aos-duration="2500"
              >
                <IconSubtitleParagraph
                  icon={faPhone}
                  classNames="text-white blue-icon d-flex justify-content-center align-items-center fs-4"
                  subtitle="Professional Staff"
                  paragraph="Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsComp;
