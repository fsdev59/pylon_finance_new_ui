const actions = {
  GET_ALLOWANCE: 'GET_ALLOWANCE',
  GET_STAKED: 'GET_STAKED',
  GET_BALANCE: 'GET_BALANCE',
  GET_PENDING: 'GET_PENDING',

  APPROVE_TOKEN: 'APPROVE_TOKEN',
  DEPOSIT_TOKEN: 'DEPOSIT_TOKEN',
  WITHDRAW_TOKEN: 'WITHDRAW_TOKEN',
  HARVEST_TOKEN: 'HARVEST_TOKEN',
  DRAIN_TOKEN: 'DRAIN_TOKEN',

  GET_ETH_PRICE: 'GET_ETH_PRICE',
  GET_ETH_PRICE_SUCCESS: 'GET_ETH_PRICE_SUCCESS',

  GET_TOTAL_SUPPLY: 'GET_TOTAL_SUPPLY',

  GET_TVL: 'GET_TVL',

  getEthPrice: () => ({
    type: actions.GET_ETH_PRICE,
  }),

  getTotalSupply: (tokenAddress, callback) => ({
    type: actions.GET_TOTAL_SUPPLY,
    payload: { tokenAddress, callback },
  }),

  getBalance: (tokenAddress, callback) => ({
    type: actions.GET_BALANCE,
    payload: { tokenAddress, callback },
  }),

  getAllowance: (tokenAddress, callback) => ({
    type: actions.GET_ALLOWANCE,
    payload: { tokenAddress, callback },
  }),

  getStaked: (pid, callback) => ({
    type: actions.GET_STAKED,
    payload: { pid, callback },
  }),

  getPending: (pid, callback) => ({
    type: actions.GET_PENDING,
    payload: { pid, callback },
  }),

  approveToken: (tokenAddress, callback) => ({
    type: actions.APPROVE_TOKEN,
    payload: { tokenAddress, callback },
  }),

  depositToken: (pid, amount, callback) => ({
    type: actions.DEPOSIT_TOKEN,
    payload: { pid, amount, callback },
  }),

  withdrawToken: (pid, amount, callback) => ({
    type: actions.WITHDRAW_TOKEN,
    payload: { pid, amount, callback },
  }),

  harvestToken: (pid, callback) => ({
    type: actions.HARVEST_TOKEN,
    payload: { pid, callback },
  }),

  drainToken: (pid, callback) => ({
    type: actions.DRAIN_TOKEN,
    payload: { pid, callback },
  }),

  getTvl: (
    farm,
    ethPrice,
    nerdlingPrice,
    derivedEth0,
    decimals0,
    derivedEth1,
    decimals1,
    poolAddress,
    adapterAddress,
    adapterAbi,
    callback,
  ) => ({
    type: actions.GET_TVL,
    payload: {
      farm,
      ethPrice,
      nerdlingPrice,
      derivedEth0,
      decimals0,
      derivedEth1,
      decimals1,
      poolAddress,
      adapterAddress,
      adapterAbi,
      callback,
    },
  }),
}

export default actions
