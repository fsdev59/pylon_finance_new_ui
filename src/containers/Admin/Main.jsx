import React, { useState } from "react";

import { toast } from "react-toastify";

import { FDI_VAULT } from "../../helpers/fdiVault/constants";
import { PYLON_VAULT } from "../../helpers/pylonVault/constants";

import "./main.scss";
import cx from "classnames";

const Main = () => {
  const vaultList = [...FDI_VAULT, ...PYLON_VAULT];
  const [idx, setIdx] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleSend = () => {};

  const callbackSend = (status) => {};

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="vault-selector">
          {vaultList.map((item, index) => (
            <div
              role="button"
              className={cx("vault-item", { active: index === idx })}
              onClick={(e) => setIdx(index)}
            >
              <img
                src={require(`../../assets/images/icons/${item.iconName}`)}
                width="30"
                alt=""
              />
              {` `}
              <div className="title">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="reward-section">
          <div className="vault-item">
            <img
              src={require(`../../assets/images/icons/${vaultList[idx].iconName}`)}
              width="30"
              alt=""
            />
            {` `}
            <div className="title">{vaultList[idx].title}</div>
          </div>
          <input
            type="text"
            value={amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={(e) => handleSend()}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
