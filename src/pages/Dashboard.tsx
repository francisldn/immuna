import React from "react"
import SideMenu from "../components/SideMenu"
import PageHeader from "../components/PageHeader"
import DashboardContainer from "../components/DashboardContainer"
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from "./ErrorPage";

const Dashboard = () => {
  return (
    <div className='flex'>
      <SideMenu />
      <main className='flex flex-col'>
        <PageHeader />
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <DashboardContainer />
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default Dashboard
