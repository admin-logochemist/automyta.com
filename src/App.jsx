import React from 'react'
// import { RouterProvider } from 'react-router'
import { RouterProvider } from "react-router-dom";
import { publicRoutes } from './routes/routes'
import TawkTo from './TawkTo';

const App = () => {
  return (
    <>
      <RouterProvider router={publicRoutes} />
      <TawkTo /> 
    </>

  )
}

export default App
