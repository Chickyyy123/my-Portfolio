import React, { useState } from "react";
import SubtitleTitleRule from "../../utils/SubtitleTitleRule";
import IconTextNumber from "../../utils/IconTextNumber";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactUsComp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="container mt-10rem mb-5">
        <div className=" text-center">
          <SubtitleTitleRule
            subtitle="CONTACT US"
            title="If You Have Any Query, Feel Free To Contact Us"
            classname="loader mx-auto"
          />
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-4 col-md-12">
            <IconTextNumber
              icon={faPhone}
              text="Call to ask any question"
              number="+012 345 6789"
            />
          </div>
          <div className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
            <IconTextNumber
              icon={faEnvelope}
              text="Email to get free quote"
              number="info@example.com"
            />
          </div>
          <div className="col-lg-4 col-md-12 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
            <IconTextNumber
              icon={faLocationDot}
              text="Visit our office"
              number="123 Street, NY, USA"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-lg-0 mb-md-5 mb-sm-5 mb-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    value={formData.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="form-control mb-4 p-3"
                    style={{ backgroundColor: "#eef9ff" }}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="form-control mb-4 p-3 text-black"
                    style={{ backgroundColor: "#eef9ff" }}
                  />
                </div>
              </div>
              <input
                type="text"
                value={formData.subject}
                name="subject"
                onChange={handleChange}
                placeholder="Subject"
                className="form-control mb-4 p-3 text-black"
                style={{ backgroundColor: "#eef9ff" }}
              />
              <textarea
                placeholder="Message"
                value={formData.message}
                name="message"
                onChange={handleChange}
                className="form-control mb-4 p-3 text-black"
                style={{ backgroundColor: "#eef9ff", height: "150px" }}
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="text-white buttons w-100 p-3"
              />
            </form>
          </div>
          <div
            className="col-lg-6 col-md-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000623.759652718!2d-75.770041!3d42.74622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710957119726!5m2!1sen!2sbd"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsComp;
