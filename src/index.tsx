import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ErrorPage from "./pages/ErrorPage"
import {
  createBrowserRouter,
  RouterProvider,
  // Route
} from "react-router-dom"
import { RiskProvider } from "./hooks/useRiskStatus"
import { PoolProvider } from "./hooks/usePoolData"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
  cache: new InMemoryCache(),
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    // loader: dataLoader,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PoolProvider>
        <RiskProvider>
          <RouterProvider router={router} />
        </RiskProvider>
      </PoolProvider>
    </ApolloProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
