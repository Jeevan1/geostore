import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterLink = ({ value, link }) => {
  return (
    <li>
      <Link to={link} className="link">{value}</Link>
    </li>
  );
};

function Footer() {
  return (
    <footer className="Footer py-5 mt-5">
      <div className="container">
        <div className="Footer__top ">
          <div className="row border-bottom pb-4">
            <div className="col-lg-3">
              <div className="logo">
                <img src="../assets/img/logo/logo2.png" alt="" />
              </div>
              <ul>
                <FooterLink value={"Kathmandu, Budhanilkantha-13, Nepal"} />
                <FooterLink value={"geoshop@gmail.com"} />
                <FooterLink value={"+977-98267-2727"} />
              </ul>
            </div>
            <div className="col-lg-3">
              <h6>Shopping &amp; Categories</h6>
              <ul>
                <FooterLink link={'./products/category/men'} value={"Men’s Shopping"} />
                <FooterLink link={'./products/category/women'} value={"Women’s Shopping"} />
                <FooterLink value={"Kid’s Shopping"} />
              </ul>
            </div>
            <div className="col-lg-3">
              <h6>Useful Links</h6>
              <ul>
                <FooterLink link={'./'} value={"Home"} />
                <FooterLink link={'./about'} value={"About Us"} />
                <FooterLink link={'./contact-us'} value={"Contact"} />
                <FooterLink value={"Help"} />
              </ul>
            </div>
            <div className="col-lg-3">
              <h6>Help &amp; Information</h6>
              <ul>
                <FooterLink value={"Help"} />
                <FooterLink value={"FAQ's"} />
                <FooterLink value={"Shipping"} />
                <FooterLink value={"Tracking ID"} />
              </ul>
            </div>
          </div>
        </div>
        <div className="Footer__bottom pt-4">
          <p>Copyright © 2023 GeoShop Co., Ltd. All Rights Reserved.</p>
          <p>
            Design: <Link className="link">Jdev</Link>
          </p>
          <ul className=" d-flex justify-content-center gap-3 pt-2">
            <FooterLink value={<FaFacebookF className='icon'/>} />
            <FooterLink value={<FaTwitter className='icon'/>} />
            <FooterLink value={<FaLinkedinIn className='icon'/>} />
            <FooterLink value={<FaInstagram className='icon'/>} />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
