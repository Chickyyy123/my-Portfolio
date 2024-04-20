import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/utils.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const CardComp = ({ image, name, subject }) => {
  return (
    <>
      <Card className="card card-shadow box-shadow">
        <div className="box-image position-relative">
          <Card.Img
            variant="top"
            className=" img-cards img-fluid"
            src={image}
          />
          <div className="overlay"></div>
          <div className="social-image d-flex gap-2">
            <button className="buttons" data-aos="fade-up" data-aos-delay="100">
              <FontAwesomeIcon
                icon={faTwitter}
                className="p-1 py-2 fs-5 border-0"
              />
            </button>
            <button className="buttons" data-aos="fade-up" data-aos-delay="200">
              <FontAwesomeIcon
                icon={faInstagram}
                className="p-1 py-2 fs-5 border-0"
              />
            </button>
            <button className="buttons" data-aos="fade-up" data-aos-delay="300">
              <FontAwesomeIcon
                icon={faYoutube}
                className="p-1 py-2 fs-5 border-0"
              />
            </button>
            <button className="buttons" data-aos="fade-up" data-aos-delay="400">
              <FontAwesomeIcon
                icon={faFacebook}
                className="p-1 py-2 fs-5 border-0"
              />
            </button>
          </div>
        </div>
        <Card.Body className="bg-lightblue">
          <Card.Title>
            <span className="text-blue fs-4 fw-bold d-flex justify-content-center">
              {name}
            </span>
          </Card.Title>
          <Card.Text className="text-center fw-bolder">{subject}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComp;
