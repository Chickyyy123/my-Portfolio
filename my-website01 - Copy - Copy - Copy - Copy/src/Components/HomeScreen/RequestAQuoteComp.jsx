import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import IconAndText from "../../utils/IconAndText";
import { faPhone, faReply } from "@fortawesome/free-solid-svg-icons";
import IconTextNumber from "../../utils/IconTextNumber";
import FormComp from "../Form/FormComp";

const RequestAQuoteComp = () => {
  return (
    <div>
      <div className=" container mt-10rem mb-5">
        <div
          className="row"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="col-lg-6 col-md-12">
            <SubtitleTitleRule
              subtitle="Request A Quote"
              title="Need A Free Quote? Please Feel Free to Contact Us"
              classname="loader"
            />
            <div className="row mt-5">
              <div className="col-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <IconAndText
                    icon={faReply}
                    iconStyle="text-blue pt-2 fs-5"
                    text="Reply within 24 hours"
                    paragraghStyle="fs-5 fw-bold"
                  />
                </div>
              </div>
              <div className="col-6">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                >
                  <IconAndText
                    icon={faPhone}
                    iconStyle="text-blue pt-2 fs-5"
                    text="24 hrs telephone support"
                    paragraghStyle="fs-5 fw-bold"
                  />
                </div>
              </div>
            </div>
            <p className="mt-3 mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="350"
            >
              <IconTextNumber
                icon={faPhone}
                text="Call to ask any question"
                number="+012 345 6789"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="row"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <FormComp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAQuoteComp;
