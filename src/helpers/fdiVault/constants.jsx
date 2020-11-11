export const ADDR_COMP_VAULT        = "0xfB594b9a0cACD9A4e4C506b4d318F7a7AA1caDc9";
export const ADDR_DAI_VAULT         = "0xAF527E70898d8179d38b429f570327E296feAaD3";
export const ADDR_LEND_VAULT        = "0xF910EE6b3924CCF6DebBaB503a7c62B797fB9Fab";
export const ADDR_LINK_VAULT        = "0x884D2D79657BaC17B964bc5D8BdfD80c3712dB74";
export const ADDR_SNX_VAULT         = "0x2dA9a52911bd029306398feaEA4Dd4658247B1f7";
export const ADDR_TUSD_VAULT        = "0x8ffF32c2Fc7E5C904EE05374e0b484d7313ebfD0";
export const ADDR_UNI_VAULT         = "0x35E9866bB7F13EbafeA8CE557faF7D79f6A06DDF";
export const ADDR_USDC_VAULT        = "0x34c107C66D4450b998f0FD28f78BF625b5Db1a4A";
export const ADDR_USDT_VAULT        = "0x11ad73Cd31c3AD6F589cd8AA02Bee3F1f0fE72cC";
export const ADDR_WBTC_VAULT        = "0xCe98E8aE42678595c929d18E0855335635C699B1";
export const ADDR_WETH_VAULT        = "0x36F18Af839A4669edF02308143864c7A6B59A955";
export const ADDR_YCRV_VAULT        = "0xe9Dd93D7C8F237fd57A4236054Bf5d01Fc563e46";
export const ADDR_YFII_VAULT        = "0x0Ce881Ab266e848C2A4D2d873B74Dc7A1138CE6C";
export const ADDR_YFI_VAULT         = "0x769F61BaDB3Bce9d0dC60392759220Ec1DbA79A6";
export const ADDR_BASED_VAULT       = "0xDa4325e70aC8F7D3c14Bb9882E39abE1920f3DC1";
export const ADDR_BASEDPYLON_VAULT  = "0x3Ddbbfb6F2003F670735Bcd44beADd0e0056DF99";

export const ABI_FDI_VAULT          = '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"_rewardCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_rewards","outputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressIndices","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"availableWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';

const FDI_VAULT = [
    {
        title: "Compound",
        tokenName: "COMP",
        iconName: "token_COMP.png",
    },
    {
        title: "DAI",
        tokenName: "DAI",
        iconName: "token_DAI.png",
    },
    {
        title: "ETHLend",
        tokenName: "LEND",
        iconName: "token_LEND.png",
    },
    {
        title: "Chainlink",
        tokenName: "LINK",
        iconName: "token_LINK.png",
    },
    {
        title: "Synthetix Network",
        tokenName: "SNX",
        iconName: "token_SNX.png",
    },
    {
        title: "TrueUSD",
        tokenName: "TUSD",
        iconName: "token_TUSD.png",
    },
    {
        title: "Uniswap",
        tokenName: "UNI",
        iconName: "token_UNI.png",
    },
    {
        title: "USD Coin",
        tokenName: "USDC",
        iconName: "token_USDC.png",
    },
    {
        title: "Tether USD",
        tokenName: "USDT",
        iconName: "token_USDT.png",
    },
    {
        title: "Wrapped Bitcoin",
        tokenName: "WBTC",
        iconName: "token_WBTC.png",
    },
    {
        title: "WETH",
        tokenName: "WETH",
        iconName: "token_WETH.png",
    },
    {
        title: "cDAI/cUSDC",
        tokenName: "YCRV",
        iconName: "token_YCRV.png",
    },
    {
        title: "YeFi.finance",
        tokenName: "YFII",
        iconName: "token_YFII.png",
    },
    {
        title: "yearn.finance",
        tokenName: "YFI",
        iconName: "token_YFI.png",
    },
    {
        title: "BASED",
        tokenName: "BASED",
        iconName: "token_BASED.png",
    },
    {
        title: "BASED-PYLON LP",
        tokenName: "BASED-PYLON",
        iconName: "token_BASED.png",
    }
]
