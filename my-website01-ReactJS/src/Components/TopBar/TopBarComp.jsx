import React from "react";
import {
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import TopBarIconText from "../../utils/TopBarIconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TopBarComp = () => {
  return (
    <div>
      <div className=" bg-darkblue text-white px-5 position-relative z-1 d-lg-block d-md-none d-sm-none d-none">
        <div className="d-flex">
          <div className="d-flex me-auto">
            <TopBarIconText
              icon={faMapMarkerAlt}
              text="123 Street, New York, USA"
              className="pt-3 fs-5  pe-1"
            />
            <TopBarIconText
              icon={faPhone}
              text="+012 345 6789"
              className="pt-3 fs-5 ps-3 pe-1"
            />
            <TopBarIconText
              icon={faEnvelopeOpenText}
              text="+012 345 6789"
              className="pt-3 fs-5 ps-3 pe-1"
            />
          </div>
          <div className="ms-auto gap-3 d-flex">
            <a href="https://twitter.com/">
              <FontAwesomeIcon
                icon={faTwitter}
                className=" rounded-circle border p-2 mt-2 hover-social"
              />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100014518718675">
              <FontAwesomeIcon
                icon={faFacebook}
                className=" rounded-circle border p-2 mt-2 hover-social"
              />
            </a>
            <a href="https://kh.linkedin.com/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className=" rounded-circle border p-2 mt-2 hover-social"
              />
            </a>
            <a href="https://www.instagram.com/heang__kimhak/">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" rounded-circle border p-2 mt-2 hover-social"
              />
            </a>
            <a href="https://www.youtube.com/watch?v=sYFDzk40mDg">
              <FontAwesomeIcon
                icon={faYoutube}
                className=" rounded-circle border p-2 mt-2 hover-social"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarComp;
