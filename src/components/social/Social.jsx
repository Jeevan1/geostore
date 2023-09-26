import React from "react";
import { TbBrandMedium } from "react-icons/tb";

import "./Social.scss";
import { Link } from "react-router-dom";
import Image from "./Image";

function Social() {
  return (
    <div className="social__media pt-5 mt-5">
      <div className="container">
        <div className="social__media__heading">
          <h2>Social Media</h2>
          <i>
            Details to details is what makes different from the other themes.
          </i>
        </div>
        <div className="social__media__images pt-5">
          <div className="row">
            <Image
              img={"../../../src/assets/img/bg/explore__area__right__01.jpg"}
              title={"Fashion"}
              link={""}
              icon={<TbBrandMedium className="icon" />}
            />
            <Image
              img={"../../../src/assets/img/bg/left-banner-image.jpg"}
              title={"New"}
              link={""}
              icon={<TbBrandMedium className="icon" />}
            />
            <Image
              img={"../../../src/assets/img/bg/right-banner-image-01.jpg"}
              title={"Bag"}
              link={""}
              icon={<TbBrandMedium className="icon" />}
            />
            <Image
              img={"../../../src/assets/img/bg/right-banner-image-02.jpg"}
              title={"Clothes"}
              link={""}
              icon={<TbBrandMedium className="icon" />}
            />
            <Image
              img={"../../../src/assets/img/bg/right-banner-image-03.jpg"}
              title={"Fashion"}
              link={""}
              icon={<TbBrandMedium className="icon" />}
            />
            <Image
              img={"../../../src/assets/img/bg/right-banner-image-04.jpg"}
              title={"Fashion"}
              link={""}
              icon={<TbBrandMedium className="icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
