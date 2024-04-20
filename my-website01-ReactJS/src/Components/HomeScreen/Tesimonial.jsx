import React from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import SlideShow from "../SlideShow/SlideShow";

const Tesimonial = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
      <div className=" mt-10rem container">
        <div className="text-center container">
          <SubtitleTitleRule
            subtitle="TESTIMONIAL"
            title="What Our Clients Say About Our Digital Services"
            classname="loader mx-auto"
          />
        </div>
        <div className="mt-5 mb-3">
          <SlideShow />
        </div>
      </div>
    </div>
  );
};

export default Tesimonial;
