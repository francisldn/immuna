import React from "react"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import { Pool } from "../types/Pool"
import usePoolData from "../hooks/usePoolData"
import Loading from "../pages/Loading"

export default function TableContainer() {
  const { pools, loading } = usePoolData()

  if(loading) return <Loading/>

  return (
    <section className='mt-[1rem] table-width mx-[1.25rem] bg-white'>
      <table className='w-full'>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {!loading &&
            pools &&
            pools.map((pool: Pool, index: number) => (
              <TableRow
                key={pool.poolAddress}
                rowColor={index % 2 === 0 ? "white" : "lightblue"}
                pool={pool}
              />
            ))}
        </tbody>
      </table>
    </section>
  )
}
