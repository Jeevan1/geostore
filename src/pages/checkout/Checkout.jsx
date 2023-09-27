import React from "react";
import { IoChevronBack } from "react-icons/io5";

import "./Checkout.scss";
import { Link } from "react-router-dom";
import FormInput from "../../components/formInput/FormInput";
import Button from "../../components/button/Button";
import { useSelector } from "react-redux";

function Checkout() {
  const cartItem = useSelector((state) => state.cartItem);
  return (
    <div className="Checkout ">
      <div className="row">
        <div className="col-lg-7 col-sm-7 order__left py-5">
          <div className="Checkout__left">
            <div className="container">
              <h4 className="pb-3">Checkout Page</h4>
              <form action="" className="payenment__form">
                <div className="payenment__method">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6 mb-3">
                      <img
                        src="../../../src/assets/img/logo/payenment/esewa.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 mb-3">
                      <img
                        src="../../../src/assets/img/logo/payenment/amazon.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 mb-3">
                      <img
                        src="../../../src/assets/img/logo/payenment/gpay.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6 mb-3">
                      <img
                        src="../../../src/assets/img/logo/payenment/paypal.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="or">
                  <hr />
                  <p>
                    <span>OR</span>
                  </p>
                </div>
                <div className="contact__info">
                  <div className=" d-flex justify-content-between">
                    <h5>Contact Information</h5>
                    <small>
                      Already have an account?
                      <Link>Log In</Link>
                    </small>
                  </div>
                  <FormInput type={"email"} placeholder="Email" />
                  <div className=" d-flex gap-2 py-2">
                    <input type="checkbox" name="log_in" />
                    <span>Keep me upto date on news and exclusive offes</span>
                  </div>
                </div>
                <div className="shipping__address">
                  <h5 className="py-2">Shipping address</h5>
                  <div className="row">
                    <div className="col-lg-6">
                      <FormInput
                        type={"text"}
                        inputName={"f_name"}
                        placeholder={"First name"}
                      />
                    </div>
                    <div className="col-lg-6">
                      <FormInput
                        type={"text"}
                        inputName={"l_name"}
                        placeholder={"Last name"}
                      />
                    </div>
                  </div>
                  <FormInput
                    type={"text"}
                    inputName={"Company"}
                    placeholder={"Company (optional)"}
                  />
                  <FormInput
                    type={"text"}
                    inputName={"appartments"}
                    placeholder={"Appartment, suite, etc. (optional)"}
                  />
                  <FormInput
                    type={"text"}
                    inputName={"address"}
                    placeholder={"Address"}
                  />
                  <FormInput
                    type={"text"}
                    inputName={"City"}
                    placeholder={"City"}
                  />
                  <div className="row">
                    <div className="col-lg-6">
                      <FormInput
                        type={"text"}
                        inputName={"country"}
                        placeholder={"Country"}
                      />
                    </div>
                    <div className="col-lg-6">
                      <FormInput
                        type={"text"}
                        inputName={"postal_code"}
                        placeholder={"Postal code"}
                      />
                    </div>
                  </div>
                  <FormInput
                    type={"text"}
                    inputName={"phone"}
                    placeholder={"Phone"}
                  />
                </div>
                <div className="submit d-flex align-items-center justify-content-between mt-3">
                  <div className="goback">
                    <IoChevronBack className="icon" />
                    <Link className="link">Return to cart</Link>
                  </div>
                  <Button name={"Continue to shipping method"} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-5 order__right ">
          <div className="Checkout__right py-5">
            <div className="container ">
              <div className="cart__items py-2">
                {cartItem.length !== 0 ? (
                  cartItem.map((item, idx) => (
                    <div className="item" key={idx}>
                      <div className="row align-items-center">
                        <div className="col-lg-8 d-flex align-items-center gap-3">
                          <div className="item__image">
                            <img
                              src={item.image}
                              alt=""
                            />
                            <span>{item.quantity}</span>
                          </div>
                          <div>
                            <h6 className="title">{item.title}</h6>
                            <p className="category">{item.category}</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <strong>$25.00</strong>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))
                ) : (
                  <h5 className="pb-3">No items in cart.</h5>
                )}
              </div>
              <form className="gift__code d-flex gap-3">
                <FormInput placeholder={"Gift card or discount code"} />
                <Button name={"Apply"} />
              </form>
              <hr />
              <div className=" subtotal d-flex justify-content-between">
                <p>Subtotal</p>
                <span>$25.00</span>
              </div>
              <div className="shipping d-flex justify-content-between">
                <p>Shipping</p>
                <span>--</span>
              </div>
              <hr />
              <div className="total d-flex justify-content-between align-items-center">
                <p className="fs-6 fw-bold">Total</p>
                <span className="fs-4">$25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
