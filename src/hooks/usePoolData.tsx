import React, { useContext, createContext, useEffect, useState } from "react"
import { PoolApi, Pool } from "../types/Pool"
import { poolInitialData, POOLS_QUERY } from "../graphql/gqlQuery"
import { useQuery } from "@apollo/client"

export const poolAddresses = poolInitialData.map((pool) => pool.id)

interface PoolProps {
  pools: Pool[]
  loading: boolean
  error: unknown | undefined
}

export const PoolContext = createContext<PoolProps>({
  pools: [],
  loading: false,
  error: undefined,
})

export const PoolProvider = ({ children }: { children: React.ReactNode }) => {
  const { loading, data, error } = useQuery(POOLS_QUERY, {
    variables: {
      id: poolAddresses,
    },
  })
  const [poolsData, setPoolsData] = useState<Pool[]>([])

  useEffect(() => {
    if (data && !loading) {
      const newPoolsData = data.pools.map((pool: PoolApi) => {
        return {
          protocol: "Uniswap",
          poolAddress: pool.id,
          token0: {
            name: pool.token0.name,
            symbol: pool.token0.symbol,
            id: pool.token0.id,
            totalValueLocked: Number(pool.token0.totalValueLocked),
            totalValueLockedUSD: Number(pool.token0.totalValueLockedUSD),
          },
          token1: {
            name: pool.token1.name,
            symbol: pool.token1.symbol,
            id: pool.token1.id,
            totalValueLocked: Number(pool.token1.totalValueLocked),
            totalValueLockedUSD: Number(pool.token1.totalValueLockedUSD),
          },
          riskStatus: poolInitialData.find((p) => p.id === pool.id)
            ? poolInitialData.find((p) => p.id === pool.id)?.riskStatus
            : "",
          icon: poolInitialData.find((p) => p.id === pool.id)
            ? poolInitialData.find((p) => p.id === pool.id)?.icon
            : "",
        }
      })
      setPoolsData(newPoolsData)
    }
  }, [data, loading])

  return (
    <PoolContext.Provider
      value={{
        pools: poolsData,
        loading,
        error,
      }}
    >
      {children}
    </PoolContext.Provider>
  )
}

export default function usePoolData() {
  return useContext(PoolContext)
}
