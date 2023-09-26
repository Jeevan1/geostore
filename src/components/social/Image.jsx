import React from "react";
import { Link } from "react-router-dom";

function Image({link, title,icon, img}) {
  return (
    <div className="col-2">
      <img
        src={img}
        alt="social"
      />
      <div className="social__media__images__content">
        <Link className="link" to={link}>
          <small>{title}</small>
          {icon}
        </Link>
      </div>
    </div>
  );
}

export default Image;
