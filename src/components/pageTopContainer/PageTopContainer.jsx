import React from "react";
import "./PageTopContainer.scss";

function PageTopContainer({ img, title, desc }) {
  return (
    <div
      className="PageTopContainer mt-5"
      style={{
        backgroundImage: img,
      }}
    >
      <div className="container d-flex justify-content-center align-items-center flex-column h-100 text-white">
        <h1 className="pb-2">{title}</h1>
        <i>{desc}</i>
      </div>
    </div>
  );
}

export default PageTopContainer;
