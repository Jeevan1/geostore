import React from "react";
import "./AboutUs.scss";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ServiceCart from "../../components/serviceCart/ServiceCart";
import Newsletter from "../../components/Newsletter/Newsletter";
import PageTopContainer from "../../components/pageTopContainer/PageTopContainer";

function AboutUs() {
  return (
    <div className="AboutUs ">
      {/* top  */}
      <PageTopContainer
        img={"url('../../../src/assets/img/bg/aboutus-01.jpg')"}
        title={"About Our Company"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, error."
        }
      />

      {/* end  */}

      <div className="AboutUs__skills mt-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 px-4">
              <div className="left__img">
                <img src="../../../src/assets/img/bg/aboutus-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 px-4">
              <div className="right__content d-flex gap-3 flex-column">
                <h2>About Us & Our Skills</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod kon tempor incididunt ut labore.
                </p>
                <div className="quote">
                  <FaQuoteLeft className="icon" />
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos, modi aperiam recusandae minus officia earum?
                  </i>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi sunt vitae at ea id exercitationem fugiat nisi officia
                  enim dolor? Suscipit ipsam possimus delectus, veritatis maxime
                  nemo. Quisquam, odio maxime.
                </p>
                <ul className="d-flex gap-2">
                  <li>
                    <Link className="link">
                      <FaFacebookF className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <FaTwitter className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <FaLinkedinIn className="icon" />
                    </Link>
                  </li>
                  <li>
                    <Link className="link">
                      <FaInstagram className="icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs__teams mt-5 pt-5">
        <div className="container">
          <div className="AboutUs__teams__top">
            <h2>Our Amazing Team</h2>
            <i className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              delectus.
            </i>
          </div>
          <div className="AboutUs__teams__items py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="team__item">
                  <div className="team__item__top">
                    <img
                      src="../../../src/assets/img/teams/team-01.jpg"
                      alt=""
                    />
                    <ul className="hover__icon d-flex gap-2">
                      <li>
                        <Link className="link">
                          <FaFacebookF className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaTwitter className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaLinkedinIn className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaInstagram className="icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team__item__content">
                    <h4>Jeevan Shrestha</h4>
                    <i>Company CEO</i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team__item">
                  <div className="team__item__top">
                    <img
                      src="../../../src/assets/img/teams/team-02.jpg"
                      alt=""
                    />
                    <ul className="hover__icon d-flex gap-2">
                      <li>
                        <Link className="link">
                          <FaFacebookF className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaTwitter className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaLinkedinIn className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaInstagram className="icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team__item__content">
                    <h4>Jeevan Shrestha</h4>
                    <i>Company CEO</i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team__item">
                  <div className="team__item__top">
                    <img
                      src="../../../src/assets/img/teams/team-03.jpg"
                      alt=""
                    />
                    <ul className="hover__icon d-flex gap-2">
                      <li>
                        <Link className="link">
                          <FaFacebookF className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaTwitter className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaLinkedinIn className="icon" />
                        </Link>
                      </li>
                      <li>
                        <Link className="link">
                          <FaInstagram className="icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="team__item__content">
                    <h4>Jeevan Shrestha</h4>
                    <i>Company CEO</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs__services mt-5 pt-5">
        <div className="container">
          <div className="AboutUs__teams__top">
            <h2>Our Services</h2>
            <i className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              delectus.
            </i>
          </div>
          <div className="AboutUs__services__content pt-5">
            <div className="row">
              <div className="col-lg-4 px-3">
                <ServiceCart
                  title={"New Products Cart"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit nam corporis quod eveniet ipsa totam veritatis sequi voluptatum quaerat."
                  }
                  img={"../../../src/assets/img/bg/left-banner-image.jpg"}
                />
              </div>
              <div className="col-lg-4 px-3">
                <ServiceCart
                  title={"Design Products"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit nam corporis quod eveniet ipsa totam veritatis sequi voluptatum quaerat."
                  }
                  img={"../../../src/assets/img/bg/right-banner-image-01.jpg"}
                />
              </div>
              <div className="col-lg-4 px-3">
                <ServiceCart
                  title={"Discounted Items"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit nam corporis quod eveniet ipsa totam veritatis sequi voluptatum quaerat."
                  }
                  img={"../../../src/assets/img/bg/right-banner-image-04.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs__newsletter pt-5">
        <Newsletter />
      </div>
    </div>
  );
}

export default AboutUs;
