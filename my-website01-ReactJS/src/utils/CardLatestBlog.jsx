import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/utils.css";
import {} from "@fortawesome/free-brands-svg-icons";
import IconTextLatestBlog from "./IconTextLatestBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardLatestBlog = ({
  image,
  icon1,
  icon2,
  icon3,
  text1,
  text2,
  subtitle,
  paragraph,
  readmore,
}) => {
  return (
    <>
      <Card className="card card-shadow box-shadow">
        <div className="box-image position-relative">
          <Card.Img
            variant="top"
            className=" img-cards img-fluid"
            src={image}
          />
          <div className=" web-design fs-5 text-white bg-blue px-3 py-2">Web Design</div>
        </div>
        <Card.Body className="bg-lightblue">
          <Card.Title>
            <IconTextLatestBlog
              icon1={icon1}
              icon2={icon2}
              text1={text1}
              text2={text2}
            />
            <h3 className="mt-3 mb-3 fw-bolder">{subtitle}</h3>
            <p>{paragraph}</p>
            <a href="#noPage" className="readmore">
              {readmore} <FontAwesomeIcon icon={icon3} className="ms-2" />
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardLatestBlog;
