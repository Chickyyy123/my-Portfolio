import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import {
  faArrowRight,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleAndLoader from "../../../utils/TitleAndLoader";
import IconAndText from "../../../utils/IconAndText";
import PictureAndText from "../../../utils/PictureAndText";
import Image from "../../../utils/Image";
import TagUtil from "../../../utils/TagUtil";
import VendorComp from "../../../Components/HomeScreen/VendorComp";
import FooterComp from "../../../Components/Footer/FooterComp";
import TitleLoader from "../../../utils/TitleLoader";
import Comment from "../../../utils/Comment";

const BlogDetailScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    })
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }
  return (
    <>
      <div>
        <Navbar title="Blog Detail" Home="Home" icon={faCircle} />
      </div>
      <div className="container mt-10rem">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Image
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-1.jpg"
              className=" img-fluid w-100"
            />
            <h2 className="mt-5 mb-5">
              Diam dolor est labore duo ipsum clita sed et lorem tempor duo
            </h2>
            <p>
              Sadipscing labore amet rebum est et justo gubergren. Et eirmod
              ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
              rebum et lorem magna kasd, stet amet magna accusam consetetur
              eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
              Ipsum sit gubergren dolores et, consetetur justo invidunt at et
              aliquyam ut et vero clita. Diam sea sea no sed dolores diam
              nonumy, gubergren sit stet no diam kasd vero.
            </p>
            <p>
              Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
              aliquyam dolores vero stet consetetur elitr takimata rebum
              sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
              sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
              sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
              clita lorem sit vero amet amet est dolor elitr, stet et no diam
              sit. Dolor erat justo dolore sit invidunt.
            </p>
            <p>
              Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
              voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
              kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
              Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
              labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
              kasd, takimata ea nonumy elitr sadipscing gubergren erat.
              Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
              voluptua diam dolores at sadipscing stet. Clita dolor amet dolor
              ipsum vero ea ea eos.
            </p>
            <p>
              Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
              aliquyam dolores vero stet consetetur elitr takimata rebum
              sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
              sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
              sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
              clita lorem sit vero amet amet est dolor elitr, stet et no diam
              sit. Dolor erat justo dolore sit invidunt.
            </p>
            <div className="mt-5 mb-5">
              <TitleLoader title="3 Comments" className="loader w-25" />
            </div>
            <div className="d-flex gap-3 mb-5">
              <Image
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/user.jpg"
                style={{ width: "45px", height: "45px" }}
              />
              <Comment
                name="Kimhak"
                date="01 Jan 2045"
                text="Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod"
                reply="Reply"
              />
            </div>
            <div className="d-flex gap-3 mb-5">
              <Image
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/user.jpg"
                style={{ width: "45px", height: "45px" }}
              />
              <Comment
                name="Kimhak"
                date="01 Jan 2045"
                text="Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod"
                reply="Reply"
              />
            </div>
            <div className="d-flex gap-3 mb-5 ms-5">
              <Image
                image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/user.jpg"
                style={{ width: "45px", height: "45px" }}
              />
              <Comment
                name="Kimhak"
                date="01 Jan 2045"
                text="Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod"
                reply="Reply"
              />
            </div>
            <form onSubmit={handleSubmit} className=" bg-lightblue p-5 z-0">
              <TitleAndLoader
                title="Leave A Comment"
                className="loader w-25 z-1"
              />
              <div className="row mt-5">
                <div className="col-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className=" form-control p-3 fs-5"
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    className=" form-control p-3 fs-5"
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-12 mt-4">
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    id="website"
                    className=" form-control p-3 fs-5"
                    onChange={handleChange}
                    placeholder="Website"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="comment"
                    id="commnet"
                    value={formData.comment}
                    onChange={handleChange}
                    cols="30"
                    rows="8"
                    className=" form-control fs-5 mt-4"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className=" mt-4">
                  <button className="buttons text-capitalize fs-6 w-100 p-3">
                    Leave Your Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
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
            <Image
              image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/blog-1.jpg"
              className="img-fluid mt-5"
            />
            <div className="mt-5 mb-5">
              <TitleAndLoader title="Tag Cloud" className="loader w-25" />
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
            <div className="mb-5 mt-5">
              <TitleAndLoader title="Plain Text" className="loader w-25" />
            </div>
            <div className=" text-center bg-lightblue p-5">
              <p>
                Vero sea et accusam justo dolor accusam lorem consetetur,
                dolores sit amet sit dolor clita kasd justo, diam accusam no sea
                ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
              </p>
              <button className="buttons mt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <VendorComp />
      <FooterComp />
    </>
  );
};

export default BlogDetailScreen;
