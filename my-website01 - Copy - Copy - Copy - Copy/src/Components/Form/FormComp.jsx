import React, { useState } from "react";

const FormComp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      options: "",
      message: "",
    });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    options: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="ms-lg-5 mt-lg-0 mt-md-5 mt-sm-5 mt-5 ms-lg-0 ms-md-0 ms-sm-0 ms-0">
      <form className=" p-5 bg-blue" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          className="form-control mb-4 py-3"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          className=" form-control mb-4 py-3"
          placeholder="Your Email"
          onChange={handleChange}
        />
        <select
          className=" form-control mb-4 py-3"
          value={formData.options}
          name="options"
          onChange={handleChange}
        >
          <option>Select A Service</option>
          <option>Service 1</option>
          <option>Service 2</option>
          <option>Service 3</option>
          <option>Service 4</option>
        </select>
        <textarea
          name="message"
          id=""
          value={formData.message}
          cols="30"
          rows="4"
          className=" form-control"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <input
          type="submit"
          value="Request A Quote"
          className="buttons w-100 p-3 mt-3 border-0 bg-dark"
        />
      </form>
    </div>
  );
};

export default FormComp;
