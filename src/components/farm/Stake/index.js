import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";
import cx from "classnames";

const TextBlock = ({ title, content, align, colorTitle, colorContent }) => {
  const textAlign = align ? align : "left";

  return (
    <div className="text-block-wrapper">
      <div
        className="text-block-title"
        style={{ color: colorTitle, textAlign }}
      >
        {title}
      </div>
      <div
        className="text-block-content"
        style={{ color: colorContent, textAlign }}
      >
        {content}
      </div>
    </div>
  );
};

export default function (props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="stake-container">
      <div className="stake-header">
        <div className="stake-header-section">
          <img
            src={require("../../../assets/images/ycrv.png")}
            alt=""
            height="36"
          />
          <TextBlock
            title="YCRV"
            content="ETH-USDC UNIv2 LP"
            colorTitle="#182373"
            colorContent="#00b9ea"
          />
        </div>
        <div className="stake-header-section">
          <TextBlock
            title="26.82% APY + 46% VALUE"
            content="Yearly Growth"
            colorTitle="#fd8300"
            colorContent="#00b9ea"
          />
        </div>
        <div className="stake-header-section">
          <TextBlock
            title="0.00 ETH"
            content="Available to deposit"
            colorTitle="#182373"
            colorContent="#182373"
          />
          <TextBlock
            title="0.00 ETH"
            content="Deposited"
            colorTitle="#182373"
            colorContent="#182373"
            align="right"
          />
        </div>
        <div
          className="stake-header-up"
          role="button"
          onClick={(e) => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
      </div>
      {open && (
        <div className="stake-content">
          <div className="stake-content-section left">
            <div className="stake-content-row">
              <div className="title">YCRV deposited in VAULT</div>
              <div className="content">19,958,14 YCRV</div>
            </div>
            <div className="stake-content-row">
              <div className="title">Max cap</div>
              <div className="content">20,000 YCRV</div>
            </div>
            <div className="stake-content-row">
              <div className="title">View YCRV VAULT contract</div>
            </div>
            <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">Your wallet 0.0000 YCRV</div>
            </div>
            <div className="stake-content-row">
              <input type="text" />
            </div>
            <div className="stake-content-row">
              <span className="percent">25%</span>
              <span className="percent">50%</span>
              <span className="percent">75%</span>
              <span className="percent">100%</span>
              <span className="percent"></span>
            </div>
            <div className="stake-content-row">
              <button className="blue">Deposit</button>
            </div>
          </div>
          <div className="stake-content-section right">
            <div className="stake-content-row">
              <div className="title">Earning comitted to mining fund</div>
              <div className="content">75%</div>
            </div>
            <div className="stake-content-row">
              <div className="title">Net Earning</div>
              <div className="content">25%</div>
            </div>
            <div className="stake-content-row">
              <div className="title">View WETH VAULT contract</div>
            </div>
            <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">Your wallet 0.0000 ETH</div>
            </div>
            <div className="stake-content-row">
              <input type="text" />
            </div>
            <div className="stake-content-row">
              <span className="percent">25%</span>
              <span className="percent">50%</span>
              <span className="percent">75%</span>
              <span className="percent">100%</span>
              <span className="percent"></span>
            </div>
            <div className="stake-content-row">
              <button className="cyan mr">Withdraw</button>
              <button className="blue-out ml">Claim Rewards</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
