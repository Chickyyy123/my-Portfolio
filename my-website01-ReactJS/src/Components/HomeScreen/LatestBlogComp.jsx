import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import CardLatestBlog from "../../utils/CardLatestBlog";
import {
  faArrowRight,
  faCalendarAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const LatestBlogComp = () => {
  return (
    <>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="text-center mt-10rem mb-5">
          <SubtitleTitleRule
            subtitle="Latest Blog"
            title="Read The Latest Articles from Our Blog Post"
            classname="loader mx-auto"
          />
        </div>
        <div className="row mb-5">
          <div
            className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <CardLatestBlog
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-1.jpg"
              icon1={faUser}
              text1="Kimhak"
              icon2={faCalendarAlt}
              text2="01, Jan, 2045"
              subtitle="How to build a website"
              paragraph="Dolor et eos labore stet justo sed est sed sed sed dolor stet amet"
              readmore="READ MORE"
              icon3={faArrowRight}
            />
          </div>
          <div
            className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <CardLatestBlog
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-2.jpg"
              icon1={faUser}
              text1="Kimhak"
              icon2={faCalendarAlt}
              text2="01, Jan, 2045"
              subtitle="How to build a website"
              paragraph="Dolor et eos labore stet justo sed est sed sed sed dolor stet amet"
              readmore="READ MORE"
              icon3={faArrowRight}
            />
          </div>
          <div
            className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <CardLatestBlog
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-3.jpg"
              icon1={faUser}
              text1="Kimhak"
              icon2={faCalendarAlt}
              text2="01, Jan, 2045"
              subtitle="How to build a website"
              paragraph="Dolor et eos labore stet justo sed est sed sed sed dolor stet amet"
              readmore="READ MORE"
              icon3={faArrowRight}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogComp;
