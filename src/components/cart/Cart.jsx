import React from "react";
import { RxCrossCircled } from "react-icons/rx";

import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { noActiveCart } from "../../store/slice/stateSlice";
import { deleteCart, updatedCart } from "../../store/slice/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItem);

  let totalAmount = 0;
  cartItem.forEach((sum) => {
    const qty = sum.quantity;
    const price = sum.price;
    const total = qty * price;
    totalAmount += total;
  });

  const updateCart = (id, quantity) => ({
    id,
    quantity,
  });
  return (
    <>
      <div className="Cart shadow text-dark">
        <div className="container-fluid p-0">
          <div className="Cart__heading p-3 d-flex align-items-center justify-content-between bg-light">
            <h4 className="">My Cart</h4>
            <RxCrossCircled
              className="icon fs-4"
              onClick={() => dispatch(noActiveCart())}
            />
          </div>
          <div className="Cart__content p-3 pb-0">
            {cartItem.length === 0 ? (
              <h5 className="">No items in cart</h5>
            ) : (
              cartItem.map((item, idx) => (
                <>
                  <div className="Cart__content__item" key={idx}>
                    <div className="row">
                      <div className="col-4">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="col-8">
                        <h6 className="title pe-4">{item.title}</h6>
                        <p className="category">{item.category}</p>
                        <div className="remove__item">
                          <RxCrossCircled
                            className="icon fs-4"
                            onClick={() => dispatch(deleteCart(item.id))}
                          />
                        </div>
                        <div className="d-flex align-items-baseline justify-content-between pe-3">
                          <input
                            type="number"
                            className="quantity text-center"
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                updatedCart(updateCart(idx, e.target.value))
                              )
                            }
                          />
                          <p>{item.quantity}</p>
                          <p className="price fw-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            )}
          </div>
          <div className="Cart__footer bg-light  px-4">
            <div className="total__amount d-flex py-3 align-items-center  justify-content-between">
              <h5>Subtotal:</h5>
              <p>
                <strong>${totalAmount.toFixed(2)}</strong>
              </p>
            </div>
            <div className="checkout text-center pb-3">
              <button className="border border-dark py-2">
                <Link to={'/checkout'} className="link">Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
