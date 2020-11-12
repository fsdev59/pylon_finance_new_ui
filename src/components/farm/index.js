import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Stake from "./Stake";

const Farm = ({ data, type }) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleDeposit = (vault, amount, callback) => {};

  const handleWithdraw = (vault, amount, callback) => {};

  const handleClaimReward = (vault, callback) => {};

  const getVaultBalance = (valut, callback) => {};
  const getVaultDepositedAmount = (vault, callback) => {};

  const getTotalDepositedAmount = (vault, callback) => {};
  const getVaultTvl = (vault, callback) => {};
  const getVaultMiningEarning = (vault, callback) => {};

  return (
    <>
      {data.map((item) => (
        <Stake
          loading={loading}
          key={item.title}
          type={type}
          item={item}
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
          onClaimReward={handleClaimReward}
          getBalance={getVaultBalance}
          getDepositedAmount={getVaultDepositedAmount}
          getTotalDepositedAmount={getTotalDepositedAmount}
          getTvl={getVaultTvl}
          getMiningEarning={getVaultMiningEarning}
        />
      ))}
    </>
  );
};

export default Farm