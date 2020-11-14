import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import "./styles.scss";
import cx from "classnames";

const Header = ({ location }) => {
  const [menuName, setMenuName] = useState("home");

  useEffect(() => {
    if (location.pathname.indexOf("home") > 0) setMenuName("home");
    if (location.pathname.indexOf("about-pylon") > 0)
      setMenuName("about-pylon");
    if (location.pathname.indexOf("fdi-vault") > 0) setMenuName("fdi-vault");
    if (location.pathname.indexOf("ycrv-vault") > 0) setMenuName("ycrv-vault");
    if (location.pathname.indexOf("pylon-vault") > 0)
      setMenuName("pylon-vault");
    if (location.pathname.indexOf("partners") > 0) setMenuName("partners");
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link className="header__logo" to="/home">
            <img
              className="header__logo__img"
              src={require("../../../assets/images/pylon.png")}
              alt="pylon - new"
            />
          </Link>
          <nav className="header__nav">
            <ul>
              <li className={cx("menu-link", { active: menuName === "home" })}>
                <Link to="/home">HOME</Link>
              </li>
              <li
                className={cx("menu-link", {
                  active: menuName === "about-pylon",
                })}
              >
                <Link to="/about-pylon">ABOUT PYLON</Link>
              </li>
              {/* <li className={cx("menu-link", { active: menuName === "ycrv-vault" })}>
                <Link to="/ycrv-vault">YCRV VAULT</Link>
              </li> */}
              <li
                className={cx("menu-link", {
                  active: menuName === "fdi-vault",
                })}
              >
                <Link to="/fdi-vault">FDI VAULT</Link>
              </li>
              <li
                className={cx("menu-link", {
                  active: menuName === "pylon-vault",
                })}
              >
                <Link to="/pylon-vault">PYLON GPU VAULT</Link>
              </li>
              <li
                className={cx("menu-link", { active: menuName === "partners" })}
              >
                <Link to="/partners">PARTNERS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default withRouter(Header);
