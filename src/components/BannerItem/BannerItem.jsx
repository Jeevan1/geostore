import React from "react";
import "./BannerItem.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";

function BannerItem({title, desc, detail, img, link}) {
  return (
    <div className="col-lg-6 col-sm-6 pb-4">
      <div className="MainBanner__right__1 banner__item">
        <img
          src={img}
          alt="banner"
        />
        <div className="inner-content ">
          <h4>{title}</h4>
          <span>{desc}</span>
        </div>
        <div className="hover-content px-3">
          <div className="inner">
            <h4>{title}</h4>
            <p className="py-2">
              {detail}
            </p>
            <Button name={'Discover More'} link={link}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerItem;
