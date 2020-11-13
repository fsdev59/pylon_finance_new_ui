import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Stake from "./Stake";

import pageActions from "../../redux/page/actions";

const Farm = ({ data, type }) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleDeposit = (vault, amount, callback) => {
    console.log(vault, amount);
    dispatch(pageActions.depositToken(vault.address, amount, callback));
  };

  const handleWithdraw = (vault, amount, callback) => {
    dispatch(pageActions.withdrawToken(vault.address, amount, callback));
  };

  const handleClaimReward = (vault, callback) => {
    dispatch(pageActions.claimRewardAll(vault.address, callback));
  };

  const handleApprove = (vault, callback) => {
    console.log("handleApprove", vault, callback)
    dispatch(pageActions.approveToken(vault.token0, vault.address, callback));
  };

  const getVaultBalance = (vault, callback) => {
    // console.log("", vault, callback("4"));
    dispatch(pageActions.getBalance(vault.token0, callback));
  };

  const getVaultDepositedAmount = (vault, callback) => {
    // console.log("", callback("3"));
    // dispatch(pageActions.getDepositBalaces(vault.address, callback));
  };

  const getTotalDepositedAmount = (vault, callback) => {
    // console.log("", callback("4"));
    // dispatch(pageActions.getTotalDeposit(vault.address, callback));
  };

  const getVaultTvl = (vault, callback) => {
    console.log("", callback("5"));
  };

  const getVaultMiningEarning = (vault, callback) => {
    // console.log("", callback("6"));
    // dispatch(pageActions.getRewardBalances(vault.address, callback));
  };

  const getAllowance = (vault, callback) => {
    // console.log("", callback("6"));
    dispatch(pageActions.getAllowance(vault.address, vault.token0, callback));
  };

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
          onApprove={handleApprove}
          getBalance={getVaultBalance}
          getDepositedAmount={getVaultDepositedAmount}
          getTotalDepositedAmount={getTotalDepositedAmount}
          getTvl={getVaultTvl}
          getMiningEarning={getVaultMiningEarning}
          getAllowance={getAllowance}
        />
      ))}
    </>
  );
};

export default Farm