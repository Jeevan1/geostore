import React from "react";
import { Link } from "react-router-dom";

function Button({name, link, className}) {
  return (
    <button className={`purchase py-2 px-3 border border-2 ${className}`}>
      <Link to={link} className="link">{name}</Link>
    </button>
  );
}

export default Button;
