import React, { useEffect, useState } from "react";
import "./Popup.scss";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { itemAddedCartPopup } from "../../store/slice/stateSlice";

function Popup() {
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const cartAddedPopup = useSelector((state) => state.states);
  useEffect(() => {
    setTimeout(() => {
      dispatch(itemAddedCartPopup(false,''));
    }, 5000);
  });
  return (
    <>
      <div className="Popup border rounded-1 shadow shadow-lg">
        <div className="Popup__header p-3 d-flex justify-content-between align-items-center border-bottom">
          <p>1 item(s) added to cart.</p>
          <div className="d-flex align-items-center gap-3">
            {!hide && (
              <HiOutlineChevronDown
                className="icon"
                onClick={() => setHide(true)}
              />
            )}
            {hide && (
              <HiOutlineChevronUp
                className="icon"
                onClick={() => setHide(false)}
              />
            )}
            <RxCross2
              className="icon"
              onClick={() => dispatch(itemAddedCartPopup(false,''))}
            />
          </div>
        </div>
        {!hide && (
          <div className="Popup__content d-flex p-3 align-items-center justify-content-between">
            <p>{cartAddedPopup.cartAddedPopUp.item}</p>
            {/* <img src="./img/img/loading.gif" alt="" /> */}
          </div>
        )}
      </div>
    </>
  );
}

export default Popup;
