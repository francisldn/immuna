import { gql } from "@apollo/client"

export const poolInitialData = [
  {
    token0: "USDC",
    token1: "WETH",
    id: "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
    riskStatus: "Green",
    icon: "eth-usdc.png",
  },
  {
    token0: "DAI",
    token1: "USDC",
    id: "0x5777d92f208679db4b9778590fa3cab3ac9e2168",
    riskStatus: "Red",
    icon: "dai-usdc.png",
  },
  {
    token0: "BUSD",
    token1: "USDT",
    id: "0xd5ad5ec825cac700d7deafe3102dc2b6da6d195d",
    riskStatus: "Yellow",
    icon: "busd-usdt.png",
  },
  {
    token0: "1INCH",
    token1: "WETH",
    id: "0xe931b03260b2854e77e8da8378a1bc017b13cb97",
    riskStatus: "Green",
    icon: "eth-inch.png",
  },
  {
    token0: "DAI",
    token1: "WETH",
    id: "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8",
    riskStatus: "Green",
    icon: "dai-eth.png",
  },
]

export const POOLS_QUERY = gql`
  query Pools($id: [String]!) {
    pools(where: { id_in: $id }, orderBy: liquidity, orderDirection: desc) {
      id
      liquidity
      token0 {
        id
        name
        symbol
        totalValueLocked
        totalValueLockedUSD
      }
      token1 {
        id
        name
        symbol
        totalValueLocked
        totalValueLockedUSD
      }
    }
  }
`

export const SINGLE_POOL_QUERY = gql`
  query Pool($token0: String!, $token1: String!) {
    pools(
      where: { token0_: { symbol: $token0 }, token1_: { symbol: $token1 } }
      first: 1
      orderBy: liquidity
      orderDirection: desc
    ) {
      id
      liquidity
      token0 {
        id
        name
        symbol
        totalValueLocked
        totalValueLockedUSD
      }
      token1 {
        id
        name
        symbol
        totalValueLocked
        totalValueLockedUSD
      }
    }
  }
`
