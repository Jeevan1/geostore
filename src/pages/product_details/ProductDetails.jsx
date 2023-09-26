import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

import "./ProductDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../../store/slice/cartSlice";

function ProductDetails() {
  const [count, setCount] = useState(1);
  const [img, setImg] = useState(
    "../../../src/assets/img/bg/explore__area__right__01.jpg"
  );
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const productId = parseInt(id); //// Convert the id to an integer

  const itemToAdd = (id, title, category, quantity, price, image) => ({
    id: id,
    title: title,
    category,
    quantity: quantity,
    price,
    image,
  });
  return (
    <div className="ProductDetails py-5">
      <div className="container">
        {products.products.map(
          (item, idx) =>
            item.id === productId && (
              <div className="row" key={idx}>
                <div className="col-lg-7">
                  <div className="ProductDetails__left__image">
                    <img src={item.image} className="main__img shadow py-3" alt="" />
                    <div className="ProductDetails__left__image__more d-flex pt-3 gap-3">
                      <img
                        src="../../../src/assets/img/bg/right-banner-image-01.jpg"
                        alt=""
                        onClick={() =>
                          setImg(
                            "../../../src/assets/img/bg/right-banner-image-01.jpg"
                          )
                        }
                      />
                      <img
                        src="../../../src/assets/img/bg/right-banner-image-02.jpg"
                        alt=""
                        onClick={() =>
                          setImg(
                            "../../../src/assets/img/bg/right-banner-image-02.jpg"
                          )
                        }
                      />
                      <img
                        src="../../../src/assets/img/bg/right-banner-image-03.jpg"
                        alt=""
                        onClick={() =>
                          setImg(
                            "../../../src/assets/img/bg/right-banner-image-03.jpg"
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="ProductDetails__right__content ps-3">
                    <div className="d-flex justify-content-between gap-3">
                      <div>
                        <h5 className="product__name pb-2">{item.title}</h5>
                        <span className="product__price fw-bold text-secondary">
                          ${item.price}
                        </span>
                      </div>
                      <ul className="stars d-flex gap-1">
                        <li>
                          <AiFillStar className="icon" />
                        </li>
                        <li>
                          <AiFillStar className="icon" />
                        </li>
                        <li>
                          <AiFillStar className="icon" />
                        </li>
                        <li>
                          <AiFillStar className="icon" />
                        </li>
                        <li>
                          <AiFillStar className="icon" />
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <span className="product__desc">{item.description}</span>
                    <div className="quote py-3">
                      <FaQuoteLeft className="icon" />
                      <i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quos, modi aperiam recusandae minus officia earum?
                      </i>
                    </div>
                    <hr />
                    <div className="product__quantity py-2">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <h5>No. of Orders</h5>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                          <div className="quantity d-flex">
                            <button
                              className="minus"
                              onClick={() => count > 1 && setCount(count - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              step="1"
                              min="1"
                              name="quantity"
                              value={count}
                              title="qty"
                              className="input__text ps-2"
                              size={"4"}
                            />
                            <button
                              className="plus"
                              onClick={() => setCount(count + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="addto__cart py-2">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <h4>Total: ${item.price * count}</h4>
                        </div>
                        <div className="col-lg-6 d-flex d-flex justify-content-end">
                          <div className="cart__button border border-dark">
                            <button
                              onClick={() => {
                                dispatch(
                                  addCart(
                                    itemToAdd(
                                      item.id,
                                      item.title,
                                      item.category,
                                      count,
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
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
