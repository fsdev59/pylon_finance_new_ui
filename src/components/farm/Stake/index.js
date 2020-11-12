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

export default function ({ num, type, item }) {
  const [open, setOpen] = useState(num === 0);

  return (
    <div className="stake-container">
      <div className="stake-header">
        <div className="stake-header-wrapper">
          <div className="stake-header-section">
            <img
              src={require(`../../../assets/images/icons/${item.iconName}`)}
              alt=""
              height="36"
            />
            <TextBlock
              title={item.title}
              content={item.tokenName}
              colorTitle="#182373"
              colorContent="#00b9ea"
            />
          </div>
          <div className="stake-header-section">
            <TextBlock
              title="46%"
              content="Mining Seed APY"
              colorTitle="#fd8300"
              colorContent="#00b9ea"
            />
          </div>
          <div className="stake-header-section">
            <TextBlock
              title={`0.00 ${item.tokenName}`}
              content="Available to deposit"
              colorTitle="#182373"
              colorContent="#182373"
            />
            <TextBlock
              title={`0.00 ${item.tokenName}`}
              content="Deposited"
              colorTitle="#182373"
              colorContent="#182373"
              align="right"
            />
          </div>
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
              <div className="title">{item.tokenName} deposited in VAULT</div>
              <div className="content">19,958,14 {item.tokenName}</div>
            </div>
            <div className="stake-content-row">
              <div className="title">TVL</div>
              <div className="content">20,000 {item.tokenName}</div>
            </div>
            {/* <div className="stake-content-row">
              <div className="title">View {item.tokenName} VAULT contract</div>
            </div> */}
            <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">Your wallet 0.0000 {item.tokenName}</div>
            </div>
            <div className="stake-content-row">
              <input type="text" placeholder="Deposit amount" />
            </div>
            <div className="stake-content-row">
              <span className="percent">25%</span>
              <span className="percent">50%</span>
              <span className="percent">75%</span>
              <span className="percent">100%</span>
            </div>
            <div className="stake-content-row">
              <button className="blue">Deposit</button>
            </div>
          </div>
          <div className="stake-content-section right">
            {/* <div className="stake-content-row">
              <div className="title">Earning comitted to mining fund</div>
              <div className="content">75%</div>
            </div> */}
            <div className="stake-content-row">
              <div className="title">Mine Earnings</div>
              <div className="content">25 {item.tokenName}</div>
            </div>
            <div className="stake-content-row">
              <div className="title">
                <a
                  href={`https://etherscan.io/address/${item.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View {item.tokenName} VAULT contract
                </a>
              </div>
            </div>
            <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">Your wallet 0.0000 {item.tokenName}</div>
            </div>
            {/* <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">Your wallet 0.0000 {item.tokenName}</div>
            </div> */}
            {type === "PYLON" && (
              <>
                <div className="stake-content-row">
                  <input type="text" placeholder="Withdraw amount" />
                </div>
                <div className="stake-content-row">
                  <span className="percent">25%</span>
                  <span className="percent">50%</span>
                  <span className="percent">75%</span>
                  <span className="percent">100%</span>
                </div>
              </>
            )}
            <div className="stake-content-row">
              {type === "PYLON" && (
                <button className="cyan mr">Withdraw</button>
              )}
              <button className={cx("blue-out", "ml", { mtt: type === "FDI" })}>
                Claim Rewards
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
