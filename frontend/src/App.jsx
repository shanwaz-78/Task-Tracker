import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/index.jsx';
import React from 'react'

function App() {

  return (
    <>
      <Router >
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
