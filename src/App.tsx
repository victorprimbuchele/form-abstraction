import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DynamicNavigation from './components/Router/DynamicNavigation'
import Router from './components/Router/Router'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <DynamicNavigation />
        </BrowserRouter>
    )
}

export default App
