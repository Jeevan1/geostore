import React from "react";
import { FiSend } from "react-icons/fi";

import "./Newsletter.scss";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="newsletter pt-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 py-2">
            <div className="newsletter__heading">
              <h2>By Subscribing To Our Newsletter You Can Get 20% Off</h2>
              <i>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                aperiam reiciendis!
              </i>
            </div>
            <form action="" className="newsletter__subscribe pt-4">
              <div className="row">
                <div className="col-lg-5">
                  <FormInput type={"text"} placeholder={"Your Name"} />
                </div>
                <div className="col-lg-5">
                  <FormInput
                    type={"email"}
                    placeholder={"Your Email Address"}
                  />
                </div>
                <div className="col-lg-2 mt-2">
                  <Button name={<FiSend className="icon" />} />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className=" newsletter__desc row">
              <div className="col-6">
                <ul>
                  <li>
                    Store Location:
                    <br />
                    <span>Sunny Isles Beach, FL 33160, United States</span>
                  </li>
                  <li>
                    Phone:
                    <br />
                    <span>010-020-0340</span>
                  </li>
                  <li>
                    Office Location:
                    <br />
                    <span>North Miami Beach</span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Work Hours:
                    <br />
                    <span>07:30 AM - 9:30 PM Daily</span>
                  </li>
                  <li>
                    Email:
                    <br />
                    <span>info@company.com</span>
                  </li>
                  <li>
                    Social Media:
                    <br />
                    <span>
                      <Link className="link">Facebook</Link>, <Link className="link">Instagram</Link>,{" "}
                      <Link className="link">Behance</Link>, <Link className="link">Linkedin</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
