import {
  all,
  takeLatest,
  takeEvery,
  call,
  put,
  fork,
  select,
} from 'redux-saga/effects'

import actions from './actions'
import Web3 from 'web3'

import axios from 'axios'
import BigNumber from 'bignumber.js'

import { TOKEN_ABI, ABI_VAULT } from '../../helpers/constant'
import { FDI_VAULT } from '../../helpers/fdiVault/constants'
import { PYLON_VAULT } from '../../helpers/pylonVault/constants'

// import {
//   MASTER_VAMPIRE_ADDRESS,
//   MASTER_VAMPIRE_ABI,
//   TOKEN_ABI,
//   NERDLING_POOL,
// } from '../../helper/constants'
// import { add } from 'numeral'

/**
 * Load Web3.js
 */
const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      try {
        // Request account access if needed
        await window.ethereum.enable()
        // Acccounts now exposed
        resolve(web3)
      } catch (error) {
        reject(error)
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3
      // console.log("Injected web3 detected.");
      resolve(web3)
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
      const web3 = new Web3(provider)
      // console.log("No web3 instance injected, using Local web3.");
      resolve(web3)
    }
  })

// Helpers *********************************************************************************
const lookUpPrices = async function (id_array) {
  let ids = id_array.join('%2C')
  let res = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=' +
      ids +
      '&vs_currencies=usd',
  )
  return res.json()
}

const getBalanceAsync = async (instance, address) => {
  return await instance.methods
    // .balanceOf('0xbf26925f736e90e1715ce4e04cd9c289dd1bc002')
    .balanceOf(address)
    .call()
    .then((data) => {
      // console.log('balance data', address, data)
      return data
    })
    .catch((error) => {
      return error
    })
}

const getDecimalAsync = async (instance) => {
  return await instance.methods
    .decimals()
    .call()
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const getAllowanceAsync = async (instance, owner, sender) => {
  return await instance.methods
    // .allowance('0xbf26925f736e90e1715ce4e04cd9c289dd1bc002', sender)
    .allowance(owner, sender)
    .call()
    .then((data) => {
      // console.log('allowance', data);
      return data
    })
    .catch((error) => {
      return error
    })
}

const getTotalSupplyAsync = async (instance) => {
  return await instance.methods
    .totalSupply()
    .call()
    .then((data) => {
      // console.log('total supply async', data);
      return data
    })
    .catch((error) => {
      return error
    })
}

const getReservesAsync = async (instance) => {
  return await instance.methods
    .getReserves()
    .call()
    .then((data) => {
      // console.log('reserves async', data)
      return data
    })
    .catch((error) => {
      return error
    })
}

const getAvailableRewardAmountAsync = async (instance, address) => {
  return await instance.methods
    .availableRewardAmount(address)
    .call()
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const getDepositBalancesAsync = async (instance, address) => {
  return await instance.methods
    .depositBalances(address)
    .call()
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const getRewardBalancesAsync = async (instance, address) => {
  return await instance.methods
    .rewardBalances(address)
    .call()
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const getTotalDepositAsync = async (instance) => {
  return await instance.methods
    .totalDeposit()
    .call()
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const approveAsync = async (instance, web3, amount, address, spender) => {
  console.log('before approve gas amount', new BigNumber(amount).toString())
  console.log('before approve gas instance', instance)
  const gasLimit = await instance.methods
    .approve(
      spender,
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    )
    .estimateGas({ from: address })

  console.log('approve gas limit', gasLimit)

  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  // console.log('approve**********************')
  // console.log('instance', instance)
  // console.log('spender', spender)
  // console.log('amount', amount)
  // console.log('address', address)

  return await instance.methods
    .approve(
      spender,
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const depositAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .deposit(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .estimateGas({ from: address })

  return await instance.methods
    .deposit(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const depositAllAsync = async (instance, web3, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .depositAll().estimateGas({ from: address })

  return await instance.methods
    .depositAll()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const withdrawAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .withdraw(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .estimateGas({ from: address })

  return await instance.methods
    .withdraw(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const withdrawAllAsync = async (instance, web3, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .withdrawAll().estimateGas({ from: address })

  return await instance.methods
    .withdrawAll()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const claimRewardAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .claimReward(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .estimateGas({ from: address })

  return await instance.methods
    .claimReward(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const sendRewardAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .sendReward(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .estimateGas({ from: address })

  return await instance.methods
    .sendReward(
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

const claimRewardAllAsync = async (instance, web3, address) => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json',
  )
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  }

  const gasLimit = await instance.methods
    .claimRewardAll()
    .estimateGas({ from: address })

  return await instance.methods
    .claimRewardAll()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}

export function* getBalance() {
  yield takeEvery(actions.GET_BALANCE, function* ({ payload }) {
    const { tokenAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = TOKEN_ABI
    const instance = new web3.eth.Contract(abi, tokenAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const balance = yield call(getBalanceAsync, instance, accounts[0])
    callback(balance)
  })
}

export function* getAllowance() {
  yield takeEvery(actions.GET_ALLOWANCE, function* ({ payload }) {
    const { vaultAddress, tokenAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = TOKEN_ABI
    const instance = new web3.eth.Contract(abi, tokenAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const allowance = yield call(
      getAllowanceAsync,
      instance,
      accounts[0],
      vaultAddress,
    )
    callback(allowance)
  })
}

export function* getAvailableRewardAmount() {
  yield takeEvery(actions.GET_AVAILABLE_REWARD_AMOUNT, function* ({ payload }) {

    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    const accounts = yield call(web3.eth.getAccounts)

    const availableRewardAmount = yield call(getAvailableRewardAmountAsync, instance, accounts[0])
    callback(availableRewardAmount)
  })
}

export function* getDepositBalances() {
  yield takeEvery(actions.GET_DEPOSIT_BALANCE, function* ({ payload }) {
    
    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    const accounts = yield call(web3.eth.getAccounts)

    const depositBalances = yield call(getDepositBalancesAsync, instance, accounts[0])
    callback(depositBalances)
  })
}

export function* getRewardBalances() {
  yield takeEvery(actions.GET_REWARD_BALANCE, function* ({ payload }) {

    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    const accounts = yield call(web3.eth.getAccounts)

    const rewardBalances = yield call(getRewardBalancesAsync, instance, accounts[0])
    callback(rewardBalances)
  })
}

export function* getTotalDeposit() {
  yield takeEvery(actions.GET_TOTAL_DEPOSIT, function* ({ payload }) {

    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    const accounts = yield call(web3.eth.getAccounts)

    const totalDepositAmount = yield call(getTotalDepositAsync, instance)
    callback(totalDepositAmount)
  })
}

export function* approveToken() {
  yield takeLatest(actions.APPROVE_TOKEN, function* ({ payload }) {
    const { tokenAddress, vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = TOKEN_ABI
    const instance = new web3.eth.Contract(abi, tokenAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    // Check balance
    const tokenBalance = yield call(getBalanceAsync, instance, accounts[0])
    console.log('tokenBalance - approve token', tokenBalance)

    // approve with max balance
    const approveResult = yield call(
      approveAsync,
      instance,
      web3,
      tokenBalance,
      accounts[0],
      vaultAddress,
    )

    callback(approveResult.status)
  })
}

export function* depositToken() {
  yield takeLatest(actions.DEPOSIT_TOKEN, function* ({ payload }) {
    const { vaultAddress, amount, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const depositResult = yield call(
      depositAsync,
      instance,
      web3,
      amount,
      accounts[0],
    )

    callback(depositResult.status)
  })
}

export function* depositAllToken() {
  yield takeLatest(actions.DEPOSIT_TOKEN_ALL, function* ({ payload }) {
    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const depositAllResult = yield call(
      depositAllAsync,
      instance,
      web3,
      accounts[0],
    )

    callback(depositAllResult.status)
  })
}

export function* withdrawToken() {
  yield takeLatest(actions.WITHDRAW_TOKEN, function* ({ payload }) {
    const { vaultAddress, amount, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const withdrawResult = yield call(
      withdrawAsync,
      instance,
      web3,
      amount,
      accounts[0],
    )

    callback(withdrawResult.status)
  })
}

export function* withdrawAllToken() {
  yield takeLatest(actions.WITHDRAW_TOKEN_ALL, function* ({ payload }) {
    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const withdrawAllResult = yield call(
      withdrawAllAsync,
      instance,
      web3,
      accounts[0],
    )

    callback(withdrawAllResult.status)
  })
}

export function* claimReward() {
  yield takeLatest(actions.CLAIM_REWARD, function* ({ payload }) {
    const { vaultAddress, amount, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const claimRewardResult = yield call(
      claimRewardAsync,
      instance,
      web3,
      amount,
      accounts[0],
    )

    callback(claimRewardResult.status)
  })
}

export function* claimRewardAll() {
  yield takeLatest(actions.CLAIM_REWARD_ALL, function* ({ payload }) {
    const { vaultAddress, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const claimRewardAllResult = yield call(
      claimRewardAllAsync,
      instance,
      web3,
      accounts[0],
    )

    callback(claimRewardAllResult.status)
  })
}

export function* sendRewardAmount() {
  yield takeLatest(actions.SEND_REWARD_AMOUNT, function* ({ payload }) {
    const { vaultAddress, amount, callback } = payload

    const web3 = yield call(getWeb3)
    const abi = ABI_VAULT
    const instance = new web3.eth.Contract(abi, vaultAddress)

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts)

    const sendRewardResult = yield call(
      sendRewardAsync,
      instance,
      web3,
      amount,
      accounts[0],
    )

    callback(sendRewardResult.status)
  })
}

export function* getEthPrice() {
  yield takeLatest(actions.GET_ETH_PRICE, function* () {
    let data = yield call(lookUpPrices, ['ethereum'])

    yield put({
      type: actions.GET_ETH_PRICE_SUCCESS,
      ethPrice: parseFloat(data.ethereum.usd),
    })
  })
}

// export function* getTvl() {
//   yield takeEvery(actions.GET_TVL, function* ({ payload }) {
//     const {
//       farm,
//       ethPrice,
//       nerdlingPrice,
//       derivedEth0,
//       decimals0,
//       derivedEth1,
//       decimals1,
//       poolAddress,
//       adapterAddress,
//       adapterAbi,
//       callback,
//     } = payload

//     const web3 = yield call(getWeb3)
//     const abi = TOKEN_ABI
//     const instance = new web3.eth.Contract(abi, farm.tokenAddress)

//     const masterVampireInstance = new web3.eth.Contract(
//       MASTER_VAMPIRE_ABI,
//       MASTER_VAMPIRE_ADDRESS,
//     )

//     const totalSupply = yield call(getTotalSupplyAsync, instance)
//     const reserves = yield call(getReservesAsync, instance)

//     /*
//      stakingTokenPrice =
//         (result.data.pair.token0.derivedETH *
//           ethPrice *
//           result.data.pair.reserve0 +
//           result.data.pair.token1.derivedETH *
//           ethPrice *
//           result.data.pair.reserve1) /
//         (Number(result.data.pair.reserve0) + Number(result.data.pair.reserve1));
//     */
//     // const stakingTokenPrice =
//     //   (derivedEth0 * ethPrice * reserves._reserve0 +
//     //     derivedEth1 * ethPrice * reserves._reserve1) /
//     //   (Number(reserves._reserve0) + Number(reserves._reserve1))

//     const decimals = yield call(getDecimalAsync, instance)

//     // Note: totalSupply and reserves are wei unit
//     const stakingTokenPrice =
//       (derivedEth0 * ethPrice * (reserves._reserve0 / Math.pow(10, decimals0)) +
//         derivedEth1 *
//           ethPrice *
//           (reserves._reserve1 / Math.pow(10, decimals1))) /
//       (Number(totalSupply) / Math.pow(10, decimals))

//     let tvl
//     if (farm._pid === NERDLING_POOL._pid) {
//       const tokenBalance = yield call(getBalanceAsync, instance, poolAddress)
//       tvl = (tokenBalance * stakingTokenPrice) / Math.pow(10, decimals)
//     } else {
//       const lockedAmount = yield call(
//         getAdapterLockedAmountAsync,
//         new web3.eth.Contract(adapterAbi, adapterAddress),
//         MASTER_VAMPIRE_ADDRESS,
//         farm._victimPoolId,
//       )
//       console.log('-----------------------')
//       console.log(farm.name, farm._victimPoolId, lockedAmount)
//       console.log('-----------------------')
//       tvl = (lockedAmount * stakingTokenPrice) / Math.pow(10, decimals)
//     }

//     const poolInfo = yield call(
//       getPoolInfoAsync,
//       masterVampireInstance,
//       farm._pid,
//     )

//     const weeklyReward = (poolInfo.rewardPerBlock / 15) * 604800
//     // const rewardPerToken = tokenBalance > 0 ? weeklyReward / tokenBalance : 0
//     const rewardPerToken = weeklyReward / Math.pow(10, 18)

//     // const newApy =
//     //   stakingTokenPrice > 0
//     //     ? (poolInfo.rewardPerBlock * 6550 * 365 * nerdlingPrice * 100) /
//     //       stakingTokenPrice /
//     //       Math.pow(10, 18)
//     //     : 0

//     const newApy =
//       tvl > 0
//         ? (((poolInfo.rewardPerBlock / Math.pow(10, 18)) *
//             2336000 *
//             nerdlingPrice) /
//             tvl) *
//           100
//         : 0

//     // if (pid == 31) {
//     //   console.log('nerdling price', nerdlingPrice)
//     //   console.log('stakingTokenPrice', stakingTokenPrice)
//     //   console.log('derived000', derivedEth0)
//     //   console.log('derived111', derivedEth1)
//     //   console.log(
//     //     'derived0',
//     //     (derivedEth0 * ethPrice * reserves._reserve0) / 10000,
//     //   )
//     //   console.log(
//     //     'derived1',
//     //     (derivedEth1 * ethPrice * reserves._reserve1) / 10000,
//     //   )
//     //   console.log('totalSupply', totalSupply)
//     //   console.log('rewardPerToken', rewardPerToken)
//     //   console.log('reserves', reserves)
//     //   console.log('poolInfo', poolInfo)
//     //   console.log('rewardPerToken', rewardPerToken)
//     // }
//     const weeklyRoi =
//       stakingTokenPrice > 0
//         ? (rewardPerToken * nerdlingPrice * 100) / stakingTokenPrice
//         : 0

//     const apy = weeklyRoi * 52

//     console.log('*****************************************')
//     console.log('token', farm._pid, farm.tokenAddress)
//     console.log('stakingTokenPrice', stakingTokenPrice)
//     console.log('nerdlingPrice', nerdlingPrice)
//     console.log('tvl', tvl)
//     console.log('*****************************************')

//     callback(tvl, newApy)
//   })
// }

export default function* rootSaga() {
  yield all([
    // fork(approveToken),
    // fork(getAllowance),
    // fork(getStaked),
    // fork(depositToken),
    // fork(withdrawToken),
    // fork(harvestToken),
    // fork(drainToken),
    fork(getBalance),
    // fork(getPending),
    // fork(getEthPrice),
    // fork(getTvl),
    // fork(getTotalSupply),
  ])
}
