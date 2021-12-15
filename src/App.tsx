import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
