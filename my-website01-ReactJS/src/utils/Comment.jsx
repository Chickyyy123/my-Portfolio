import React from "react";

const Comment = ({ name, date, text, reply }) => {
  return (
    <div>
      <p>
        <span className=" text-blue fw-bold me-2">{name}</span>
        <span className=" fst-italic fw-bold">{date}</span>
      </p>
      <p>{text}</p>
      <div className="mt-4">
        <a
          href="#noPage"
          className=" text-decoration-none bg-lightblue px-4 py-2 text-black fw-bold"
        >
          {reply}
        </a>
      </div>
    </div>
  );
};

export default Comment;
