import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <hr className="line" />
        <div className="footer-wrapper">
          <div className="logo-wrapper">
            <Link className="footer-logo" to="/staging/home">
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
          <div className="link-wrapper">
            <h3 className="caption">Links</h3>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/">
              Services
            </Link>
            <Link className="link" to="/">
              About Us
            </Link>
            <Link className="link" to="/">
              News
            </Link>
            <Link className="link" to="/">
              Career
            </Link>
            <Link className="link" to="/">
              Blog
            </Link>
            <Link className="link" to="/">
              Team
            </Link>
            <Link className="link" to="/">
              Contact Us
            </Link>
          </div>
          <div className="subscription-wrapper">
            <h3>Subscript Us</h3>
            <span>Enter Email</span>
            <input type="text" />
            <div className="subscribe-send"></div>
          </div>
        </div>
        <div className="social-wrapper"></div>
        <div className="footer-address">
          <span className="address">
            456 California Street, San Francisco, CA 75395
          </span>
          <span>©2020 Pylon Finance, Inc.</span>
        </div>
      </footer>
    </>
  );
}
