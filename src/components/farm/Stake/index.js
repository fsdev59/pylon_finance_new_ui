import React, { useState, useCallback, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { convertBalance } from "../../../helpers/utility";

import "./styles.scss";
import cx from "classnames";
import { getAllowance } from "../../../redux/page/saga";

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

export default function ({
  type,
  item,
  loading,
  onDeposit,
  onWithdraw,
  onClaimReward,
  onApprove,
  getBalance,
  getDepositedAmount,
  getTotalDepositedAmount,
  getTvl,
  getMiningEarning,
  getAllowance,
}) {
  const [open, setOpen] = useState(true);

  const [balance, setBalance] = useState(0);
  console.log("BALANCE", balance, typeof balance);
  const [depositedAmount, setDepositedAmount] = useState(0);
  const [totalDepositedAmount, setTotalDepositedAmount] = useState(0);
  const [tvl, setTvl] = useState(0);
  const [miningEarning, setMiningEarning] = useState(0);
  const [allowance, setAllowance] = useState(0);
  
  // Inputed deposit & withdraw amount
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

  const init = useCallback(() => {
    getBalance(item, (ret) => setBalance(ret));
    getDepositedAmount(item, (ret) => setDepositedAmount(ret));
    getTotalDepositedAmount(item, (ret) => setTotalDepositedAmount(ret));
    getTvl(item, (ret) => setTvl(ret));
    getMiningEarning(item, (ret) => setMiningEarning(ret));
    getAllowance(item, (ret) => setAllowance(ret));
  }, [
    getBalance,
    getDepositedAmount,
    getTotalDepositedAmount,
    getTvl,
    getMiningEarning,
    item,
    getAllowance,
  ]);

  useEffect(() => {
    init();
  }, [init]);

  const handleDeposit = () => {
    if (deposit > 0)
      onDeposit(item, deposit, handleCallback);
  };

  const handleWithdraw = () => {
    if (withdraw > 0)
      onWithdraw(item, withdraw, handleCallback);
  };

  const handleCallback = () => {
    init();
  };

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
              title={`${convertBalance(balance)} ${item.tokenName}`}
              content="Available to deposit"
              colorTitle="#182373"
              colorContent="#182373"
            />
            <TextBlock
              title={`${convertBalance(depositedAmount)} ${item.tokenName}`}
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
              <div className="content">
                {convertBalance(depositedAmount)} {item.tokenName}
              </div>
            </div>
            <div className="stake-content-row">
              <div className="title">TVL</div>
              <div className="content">
                {convertBalance(totalDepositedAmount)} {item.tokenName}
              </div>
            </div>
            {/* <div className="stake-content-row">
              <div className="title">View {item.tokenName} VAULT contract</div>
            </div> */}
            <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">
                Your wallet {convertBalance(balance, 4)} {item.tokenName}
              </div>
            </div>
            <div className="stake-content-row">
              <input type="text" placeholder="Deposit amount" value={deposit>0?deposit:""} onChange={e => setDeposit(e.target.value)} />
            </div>
            <div className="stake-content-row">
              <span className="percent">25%</span>
              <span className="percent">50%</span>
              <span className="percent">75%</span>
              <span className="percent">100%</span>
            </div>
            <div className="stake-content-row">
              {allowance > 0 ? <button onClick={(e) => {handleDeposit()}} className="blue">
                Deposit
              </button> :
              <button onClick={(e) => {onApprove(item, handleCallback)}} className="blue">
                Approve
              </button>}

            </div>
          </div>
          <div className="stake-content-section right">
            {/* <div className="stake-content-row">
              <div className="title">Earning comitted to mining fund</div>
              <div className="content">75%</div>
            </div> */}
            <div className="stake-content-row">
              <div className="title">Mine Earnings</div>
              <div className="content">
                {convertBalance(miningEarning, 0)} PYLON
              </div>
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
              {type === "PYLON" && (
                <>
                  <div className="title"></div>
                  <div className="content">
                    Available for withdrawal{" "}
                    {convertBalance(depositedAmount, 4)} {item.tokenName}
                  </div>
                </>
              )}
            </div>
            {/* <div className="stake-content-row">
              <div className="title"></div>
              <div className="content">Your wallet 0.0000 {item.tokenName}</div>
            </div> */}
            {type === "PYLON" && (
              <>
                <div className="stake-content-row">
                  <input type="text" placeholder="Withdraw amount" value={withdraw>0?withdraw:""} onChange={e => setWithdraw(e.target.value)} />
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
                <button onClick={(e) => handleWithdraw()} className="cyan mr">
                  Withdraw
                </button>
              )}
              <button
                onClick={(e) => onClaimReward(item, handleCallback)}
                className={cx("blue-out", "ml", { mtt: type === "FDI" })}
              >
                Claim Rewards
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
