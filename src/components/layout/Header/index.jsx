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
                <Link to="#">ABOUT PYLON</Link>
              </li>
              <li className="menu-link">
                <Link to="#">YCRV VAULT</Link>
              </li>
              <li className="menu-link">
                <Link to="#">FDI VAULT</Link>
              </li>
              <li className="menu-link">
                <Link to="#">PYLON GPU VAULT</Link>
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
