import React from "react";
import IconAndText from "../../utils/IconAndText";
import {
  faArrowRight,
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import TitleLoader from "../../utils/TitleLoader";
import IconTextFooter from "../../utils/IconTextFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterComp = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="mt-10rem bg-darkblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 bg-blue px-4 pt-5 pb-5">
              <h2 className="text-white">
                <IconAndText
                  icon={faUser}
                  text="Startup"
                  paragraghStyle="text-white"
                />
              </h2>
              <p className="text-white">
                Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
                stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam
                amet erat lorem stet eos. Diam amet et kasd eos duo.
              </p>
              <form onSubmit={handlesubmit} className=" mb-5 d-flex mt-4">
                <input
                  type="email"
                  className="p-2 border-0 bg-white text-black"
                  style={{ width: "60%", outline: "none" }}
                  placeholder="Your Email"
                />
                <input
                  type="submit"
                  value="Sign Up"
                  className=" text-white border-0 bg-darkblue p-2 fw-bold"
                  style={{ width: "40%", outline: "none" }}
                />
              </form>
            </div>
            <div className="col-lg-3 col-md-12 ps-5">
              <TitleLoader
                classNames="text-white pt-5"
                className="loader mb-4"
                title="Get In Touch"
              />
              <IconTextFooter
                icon={faLocationDot}
                text="123 Street, New York, USA"
              />
              <IconTextFooter icon={faEnvelopeOpen} text="info@example.com" />
              <IconTextFooter icon={faPhone} text="+012 345 67890" />
              <div className="d-flex gap-2 mt-3">
                <button className="buttons">
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button className="buttons">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
                <button className="buttons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
                <button className="buttons">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 ps-5">
              <TitleLoader
                classNames="text-white pt-5"
                title="Quick Links"
                className="loader mt-4"
              />
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Home" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="About Us" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Our Services" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Meet The Team" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Latest Blog" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Contact Us" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 ps-5">
              <TitleLoader
                classNames="text-white pt-5"
                title="Popular Links"
                className="loader mt-4"
              />
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Home" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="About Us" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Our Services" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Meet The Team" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Latest Blog" />
                </a>
              </div>
              <div className="icon-text-footer">
                <a href="#n" className=" text-decoration-none">
                  <IconTextFooter icon={faArrowRight} text="Contact Us" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-raredarkblue text-white text-center p-4 fs-5">
          &copy;{" "}
          <a href="#no" className="text-white">
            KIMHAK.
          </a>{" "}
          All Right Reserved. Designed By{" "}
          <a href="#Nopage" className="text-white">
            HMTL Codex
          </a>
          Distributed By:{" "}
          <a href="#noPage" className="text-white">
            ThemeWagon
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
