export interface Token {
  name: string
  symbol: string
  id: string
  totalValueLocked: number
  totalValueLockedUSD: number
}

export interface Pool {
  protocol: string
  poolAddress: string
  token0: Token
  token1: Token
  riskStatus: string
  icon: string
}

export interface TokenApi {
  id: string
  name: string
  symbol: string
  totalValueLocked: number
  totalValueLockedUSD: number
}

export interface PoolApi {
  id: string
  liquidity: number
  token0: TokenApi
  token1: TokenApi
}
