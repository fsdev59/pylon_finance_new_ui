import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <nav className="header__nav">
            <ul>
              <li>
                <Link className="header__logo" to="/staging/home">
                  <img
                    className="header__logo__img"
                    src={require("../../../assets/images/pylon.png")}
                    alt="pylon - new"
                  />
                </Link>
              </li>
              <li className="menu-link">
                <Link to="/staging/home">HOME</Link>
              </li>
              <li className="menu-link">
                <Link to="/staging/about-pylon">ABOUT PYLON</Link>
              </li>
              <li className="menu-link">
                <Link to="/staging/ycrv-vault">YCRV VAULT</Link>
              </li>
              <li className="menu-link">
                <Link to="/staging/fdi-vault">FDI VAULT</Link>
              </li>
              <li className="menu-link">
                <Link to="/staging/pylon-vault">PYLON GPU VAULT</Link>
              </li>
              <li className="menu-link">
                <Link to="/staging/partners">PARTNERS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
