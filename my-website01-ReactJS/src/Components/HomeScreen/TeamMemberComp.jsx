import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import CardComp from "../../utils/CardComp";

const TeamMemberComp = () => {
  return (
    <>
      <div
        className="container mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="text-center mt-10rem mb-5">
          <SubtitleTitleRule
            subtitle="TEAM MEMEBER"
            title="Professional Stuffs Ready to Help Your Business"
            classname="loader mx-auto"
          />
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <CardComp
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/team-1.jpg"
              name="Full Name"
              subject="DESIGNATION"
            />
          </div>
          <div
            className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <CardComp
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/team-2.jpg"
              name="Full Name"
              subject="DESIGNATION"
            />
          </div>
          <div
            className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <CardComp
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/team-3.jpg"
              name="Full Name"
              subject="DESIGNATION"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberComp;
