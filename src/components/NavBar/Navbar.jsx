import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import "./Navbar.scss";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { activeCart, activeSearch } from "../../store/slice/stateSlice";
import { uniqueProducts } from "../../store/slice/productSlice";
import input from "../formInput/FormInput";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItem);
  const search = useSelector((state) => state.states.search_bar);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`Navbar py-3 ${active ? "active" : "noActive"}`}>
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="Navbar__logo">
            <NavLink to={""}>
              <figure className="">
                <img
                  src="../../../src/assets/img/logo/logo1.png"
                  className="logo__img"
                  alt=""
                />
              </figure>
            </NavLink>
          </div>
          <div className="navLinks">
            <ul className="nav-item d-flex">
              <li className="nav-link">
                <NavLink to={"/"} className={"link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to={"/products/category/women"} className={"link"}>
                  Women's
                </NavLink>
              </li>
              <li
                className="nav-link"
                onClick={() => dispatch(uniqueProducts())}
              >
                <NavLink to={"/products/category/men"} className={"link"}>
                  Men's
                </NavLink>
              </li>
              <li className="nav-link submenu">
                <span className={"link"} onClick={() => setMenu(!menu)}>
                  Pages
                  <span>
                    <MdOutlineKeyboardArrowDown className="icon" />
                  </span>
                </span>
                {menu && (
                  <ul>
                    <li>
                      <NavLink
                        to={"/about"}
                        className={"link"}
                        onClick={() => setMenu(!menu)}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/products"}
                        className={"link"}
                        onClick={() => setMenu(!menu)}
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/contact-us"}
                        className={"link"}
                        onClick={() => setMenu(!menu)}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-link submenu">
                <NavLink to={"/"} className={"link"}>
                  Features
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to={"/"} className={"link"}>
                  Explore
                </NavLink>
              </li>
              <li className="nav-link product__search">
                <BiSearch
                  className="icon link fs-3"
                  onClick={() => dispatch(activeSearch(!search))}
                />
                <div
                  className={`product__search__input ${
                    search ? "show__input" : "hide__input"
                  } `}
                >
                  <input
                    type={"text"}
                    placeholder={"Search products..."}
                    name={"search"}
                    className="px-2"
                    onChange={(e) => setSearchVal(e.target.value)}
                  />
                  <Link to={`/products/${searchVal}`} className="link">
                    <BiSearch className="icon fs-4" onClick={() => dispatch(activeSearch(!search))}/>
                  </Link>
                </div>
              </li>
              <li
                className="nav-link cart"
                onClick={() => dispatch(activeCart())}
              >
                <div className="">
                  <AiOutlineShoppingCart className="icon link fs-3" />
                  <span className="text-dark">{cartItem.length}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile__cart">
            <div className="" onClick={() => dispatch(activeCart())}>
              <AiOutlineShoppingCart className="icon link fs-3" />
              <span className="text-dark">{cartItem.length}</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
