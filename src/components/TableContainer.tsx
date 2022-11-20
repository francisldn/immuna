import React from "react"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import { Pool } from "../types/Pool"
import usePoolData from "../hooks/usePoolData"
import Loading from "../pages/Loading"

export default function TableContainer() {
  const { pools, loading } = usePoolData()

  if (loading) return <Loading />

  return (
    <section className='mt-[1rem] table-width mx-[1.25rem] bg-white shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)] rounded-[5px] min-w-[44rem]'>
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
                rowColor={index % 2 === 0 ? "bg-white" : "bg-db-row-lightblue"}
                pool={pool}
              />
            ))}
        </tbody>
      </table>
    </section>
  )
}
