import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer_wrapper">
          <div className="logo_wrapper">
            <Link className="footer_logo" to="/">
              <img
                className="footer__logo__img"
                src={require("../../../assets/images/pylon.png")}
                alt="pylon - new"
              />
              <span>
                PYLON
                <br />
                FINANCE
              </span>
            </Link>
          </div>
          <div className="link_wrapper">
            <h3 className="caption">Links</h3>
            <Link to="/">Home</Link>
            <Link to="/">Services</Link>
            <Link to="/">About Us</Link>
            <Link to="/">News</Link>
            <Link to="/">Career</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Team</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="subscript_wrapper">
            <h3>Subscript Us</h3>
            <span>Enter Email</span>
            <input type="text" />
            <div className="subscribe-send"></div>
          </div>
        </div>
        <div className="social_wrapper">
        </div>
      </footer>
    </div>
  );
}
