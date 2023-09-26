import React from "react";
import "./MainBanner.scss";
import { Link } from "react-router-dom";
import BannerItem from "../BannerItem/BannerItem";
import { bannerItem } from "../../assets/data/BannerItem";
import Button from "../button/Button";

function MainBanner() {
  return (
    <div className="MainBanner py-lg-5 py-sm-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 py-3">
            <div className="MainBanner__left ">
              <img
                src="../../../src/assets/img/bg/left-banner-image.jpg"
                alt=""
              />
              <div className="inner-content">
                <h4>We Are GeoShop</h4>
                <span className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <Button link={'/'} name={'Purchase Now!'}/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="MainBanner__right">
              <div className="row">
                {bannerItem.map((item,idx) => (
                    <BannerItem key={idx} title={item.name} desc={item.desc} detail= {item.detail}
                    img={item.img} link={item.link}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
