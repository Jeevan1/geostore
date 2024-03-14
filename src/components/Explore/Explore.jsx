import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Explore.scss";
import { Link } from "react-router-dom";
import Button from "../button/Button";

function Explore() {
  return (
    <div className="explore__area  pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="explore__area__left pe-lg-5 pb-4">
              <h2 className=" fw-bold">Explore Our Products</h2>
              <span className=" ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at
                dolorem officia quaerat illo deleniti? dolorem officia quaerat illo deleniti.
              </span>
              <div className="quote d-flex align-items-center justify-content-between gap-3">
                <FaQuoteLeft className="icon" />
                <i className=" text-dark">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente, esse? 
                </i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                architecto corrupti non suscipit aliquid rem vel quaerat, ad
                necessitatibus laboriosamm dolor sit amet consectetur, adipisicing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                repellat laboriosam, corporis{" "}
                <span>
                  <Link>support us</Link>
                </span>{" "}
                vero hic vel voluptates eum ad animi. dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="">
              <Button name={"Discover More"} link={""} className = {'text-dark border-dark'}/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="explore__area__right">
              <div className="row">
                <div className="col-lg-6">
                  <div className="leather">
                    <h4>Leather Bags</h4>
                    <i>Latest Collection</i>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="explore__area__right__img">
                    <img src="../assets/img/bg/explore__area__right__01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="second-image explore__area__right__img">
                    <img src="../assets/img/bg/right-banner-image-04.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="types">
                    <h4>Different Types</h4>
                    <i>Over 984 Products</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
