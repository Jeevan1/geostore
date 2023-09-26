import React from "react";

import { FiSend } from "react-icons/fi";
import "./ContactUs.scss";
import PageTopContainer from "../../components/pageTopContainer/PageTopContainer";
import GoogleMap from "../../components/googleMap/GoogleMap";
import FormInput from "../../components/formInput/FormInput";
import Button from "../../components/button/Button";
import Newsletter from "../../components/Newsletter/Newsletter";

function ContactUs() {
  return (
    <div className="ContactUs">
      {/* top  */}
      <PageTopContainer
        img={"url('../../../src/assets/img/bg/aboutus-01.jpg')"}
        title={"Contact Us"}
        desc={"Lorem amet consectetur adipisicing elit. Doloremque, error."}
      />

      {/* end  */}
      <div className="ContactUs__content mt-4 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="COntactUs__content__left pe-5">
                <GoogleMap />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ContactUs__content__right">
                <div className="ContactUs__content__right__heading">
                  <h2>Say Hello. Don't Be Shy!</h2>
                  <i className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia, delectus?
                  </i>
                </div>
                <form
                  action=""
                  className="ContactUs__content__right__form pt-4"
                >
                  <div className="row">
                    <div className="col lg-6">
                      <FormInput
                        type={"text"}
                        placeholder={"Your name"}
                        inputName={"name"}
                      />
                    </div>
                    <div className="col lg-6">
                      <FormInput
                        type={"email"}
                        placeholder={"Your email"}
                        inputName={"email"}
                      />
                    </div>
                    <div className="col-lg-12 py-4">
                      <FormInput
                        type={"textarea"}
                        inputName={"message"}
                        placeholder={"Your message"}
                      />
                    </div>
                    <div className="col-lg-12">
                      <Button name={<FiSend className="icon" />} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs__newsletter pt-3">
        <Newsletter />
      </div>
    </div>
  );
}

export default ContactUs;
