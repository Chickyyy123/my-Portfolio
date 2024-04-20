import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  faArrowRight,
  faCalendarAlt,
  faCircle,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CardLatestBlog from "../../utils/CardLatestBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleAndLoader from "../../utils/TitleAndLoader";
import IconAndText from "../../utils/IconAndText";
import PictureAndText from "../../utils/PictureAndText";
import Image from "../../utils/Image";
import TagUtil from "../../utils/TagUtil";

const BlogGridComp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar title="Blog Grid" Home="Home" icon={faCircle} />
      <div className=" mt-10rem container">
        <div className="row mb-4">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
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
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
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
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
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
              <div
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
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
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
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
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
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
              <div
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
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
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
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
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
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
              <div
                className="col-md-6 col-sm-12 mb-5"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
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
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <form onSubmit={handleSubmit} className="mb-5">
                <div className=" d-flex">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control p-3 w-75 rounded-0"
                    placeholder="Keyword"
                  />
                  <button className=" buttons w-25">
                    <FontAwesomeIcon icon={faSearch} className="p-2 fs-5" />
                  </button>
                </div>
              </form>
              <TitleAndLoader title="Categories" className="loader w-25" />
              <div
                style={{ backgroundColor: "#eef9ff", height: "50px" }}
                className="mt-5 mb-3 d-flex align-items-center pt-3"
              >
                <IconAndText
                  icon={faArrowRight}
                  text="Web Design"
                  paragraghStyle="fs-5 text-black fw-bold"
                  iconStyle="fs-5 mt-1 ps-3"
                />
              </div>
              <div
                style={{ backgroundColor: "#eef9ff", height: "50px" }}
                className="mb-3 d-flex align-items-center pt-3"
              >
                <IconAndText
                  icon={faArrowRight}
                  text="Web Development"
                  paragraghStyle="fs-5 text-black fw-bold"
                  iconStyle="fs-5 mt-1 ps-3"
                />
              </div>
              <div
                style={{ backgroundColor: "#eef9ff", height: "50px" }}
                className="mb-3 d-flex align-items-center pt-3"
              >
                <IconAndText
                  icon={faArrowRight}
                  text="Web Deployment"
                  paragraghStyle="fs-5 text-black fw-bold"
                  iconStyle="fs-5 mt-1 ps-3"
                />
              </div>
              <div
                style={{ backgroundColor: "#eef9ff", height: "50px" }}
                className="mb-3 d-flex align-items-center pt-3"
              >
                <IconAndText
                  icon={faArrowRight}
                  text="Keyword Research"
                  paragraghStyle="fs-5 text-black fw-bold"
                  iconStyle="fs-5 mt-1 ps-3"
                />
              </div>
              <div
                style={{ backgroundColor: "#eef9ff", height: "50px" }}
                className="mb-3 d-flex align-items-center pt-3"
              >
                <IconAndText
                  icon={faArrowRight}
                  text="Email Marketing"
                  paragraghStyle="fs-5 text-black fw-bold"
                  iconStyle="fs-5 mt-1 ps-3"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="mt-5 mb-5">
                <TitleAndLoader title="Recent Post" className="loader w-25" />
              </div>
              <PictureAndText
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-1.jpg"
                text="Lorem ipsum dolor sit amet adipis elit"
              />
              <PictureAndText
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-2.jpg"
                text="Lorem ipsum dolor sit amet adipis elit"
              />
              <PictureAndText
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-3.jpg"
                text="Lorem ipsum dolor sit amet adipis elit"
              />
              <PictureAndText
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-1.jpg"
                text="Lorem ipsum dolor sit amet adipis elit"
              />
              <PictureAndText
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-2.jpg"
                text="Lorem ipsum dolor sit amet adipis elit"
              />
              <PictureAndText
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-3.jpg"
                text="Lorem ipsum dolor sit amet adipis elit"
              />
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <Image
                  image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-1.jpg"
                  className="img-fluid mt-5"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="mt-5 mb-5">
                <TitleAndLoader title="Tag Cloud" className="loader" />
              </div>
              <div className=" d-flex gap-2 flex-wrap">
                <TagUtil tagName="Design" />
                <TagUtil tagName="Development" />
                <TagUtil tagName="Marketing" />
                <TagUtil tagName="SEO" />
                <TagUtil tagName="Writing" />
                <TagUtil tagName="Consulting" />
                <TagUtil tagName="Design" />
                <TagUtil tagName="Development" />
                <TagUtil tagName="Marketing" />
                <TagUtil tagName="SEO" />
                <TagUtil tagName="Writing" />
                <TagUtil tagName="Consulting" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="mb-5 mt-5">
                <TitleAndLoader title="Plain Text" className="loader" />
              </div>
              <div className=" text-center bg-lightblue p-5">
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur,
                  dolores sit amet sit dolor clita kasd justo, diam accusam no
                  sea ut tempor magna takimata, amet sit et diam dolor ipsum
                  amet diam
                </p>
                <button className="buttons mt-3">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <nav
          aria-label="..."
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link px-4 py-3 fs-5">Previous</span>
            </li>
            <li className="page-item active">
              <a className="page-link px-4 py-3 fs-5" href="#noPage">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link px-4 py-3 fs-5" href="#noPage">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link px-4 py-3 fs-5" href="#noPage">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link px-4 py-3 fs-5" href="#noPage">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogGridComp;
