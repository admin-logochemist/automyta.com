import React from 'react'
import { RouterProvider } from 'react-router'
import { publicRoutes } from './routes/routes'

const App = () => {
  return (
    <>
      <RouterProvider router={publicRoutes} />
    </>

  )
}

export default App
