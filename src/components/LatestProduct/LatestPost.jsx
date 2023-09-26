import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AiOutlineEye,
  AiFillStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./LatestPost.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchApiData } from "../../store/slice/productSlice";
import { useState } from "react";
import { addCart } from "../../store/slice/cartSlice";
import { itemAddedCartPopup } from "../../store/slice/stateSlice";

function LatestPost({ category, title, desc }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItem = useSelector((state) => state.cartItem);
  const popup = useSelector((state) => state.states);

  const itemToAdd = (id, title, category, quantity, price, image) => ({
    id: id,
    title: title,
    category,
    quantity: quantity,
    price,
    image,
  });

  const popupCart = (active, title) => ({
    active: active,
    item: title,
  });

  return (
    <div className="LatestPost section pt-5 mt-5" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section__heading">
              <h2>{title}</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <p>{popup.cartAddedPopUp.item}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                240:{
                  slidesPerView:1,
                },
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                780: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper mens__item pt-5 "
            >
              {products.products.map(
                (item, idx) =>
                  item.category === category && (
                    <SwiperSlide>
                      <div className="product__item shadow-sm my-lg-4 my-sm-0" key={idx}>
                        <div className="product__item__top py-lg-3 px-2">
                          <img src={item.image} alt="" />
                          <div className="product__item__top__content">
                            <ul className=" ">
                              <li>
                                <Link className="link" to={`/${item.id}`}>
                                  <AiOutlineEye />
                                </Link>
                              </li>
                              <li>
                                <Link className="link">
                                  <AiFillStar />
                                </Link>
                              </li>
                              <li
                                onClick={() => {
                                  dispatch(
                                    addCart(
                                      itemToAdd(
                                        item.id,
                                        item.title,
                                        item.category,
                                        1,
                                        item.price,
                                        item.image
                                      )
                                    )
                                  );
                                  dispatch(
                                    itemAddedCartPopup(
                                      popupCart(true, item.title)
                                    )
                                  );
                                }}
                              >
                                <Link className="link">
                                  <AiOutlineShoppingCart />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className=" row product__item__content px-3 d-flex justify-content-between gap-2">
                          <div col-lg-6>
                            <h6 className="pb-3">{item.title}</h6>
                            <span className="">${item.price}</span>
                          </div>
                          <ul className="stars d-flex col-lg-6">
                            <li>⭐</li>
                            <li>⭐</li>
                            <li>⭐</li>
                            <li>⭐</li>
                            <li>⭐</li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
