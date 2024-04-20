import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import TopBarIconText from "../../utils/TopBarIconText";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "../../utils/Image";
import BlueIcon from "../../utils/blueIcon";

const AboutUsComp = () => {
  return (
    <div className="mt-10rem container">
      <div className="row" data-aos="fade-up" data-aos-duration="1000">
        <div className="col-lg-6 col-md-12">
          <div className="container">
            <SubtitleTitleRule
              subtitle="About Us"
              title="The Best IT Solution With 10 Years of Experience"
              classname="loader"
            />
            <p className="mt-4" data-aos="fade-up" data-aos-duration="800">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <div className="row">
              <div
                className="col-6"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="col-12">
                  <div className=" font-nunito ">
                    <TopBarIconText
                      icon={faCheck}
                      text="Award Winning"
                      className="pt-3 fs-4 text-blue"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className=" font-nunito ">
                    <TopBarIconText
                      icon={faCheck}
                      text="Professional Staff"
                      className="pt-3 fs-4 text-blue"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-6"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div className="col-12">
                  <div className=" font-nunito ">
                    <TopBarIconText
                      icon={faCheck}
                      text="24/7 Support"
                      className="pt-3 fs-4 text-blue"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className=" font-nunito ">
                    <TopBarIconText
                      icon={faCheck}
                      text="Fair Prices"
                      className="pt-3 fs-4 text-blue"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" mt-3 d-flex"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <BlueIcon icon={faPhone} />
              <div className="ms-3">
                <span className=" text-dark fs-5">
                  Call to ask any question
                </span>
                <h4 className="text-blue">+012 345 6789</h4>
              </div>
            </div>
            <button
              className="buttons w-50 text-center py-3 mt-3"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Request A Quote
            </button>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <Image
            image="http://kiloit-learning.s3-website-ap-southeast-1.amazonaws.com/reactjs/team-1/sample-to-react/img/about.jpg"
            className="img-fluid ps-lg-5 ps-md-2 ps-sm-2 ps-2 pt-lg-0 pt-md-5 pt-sm-5 pt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComp;
