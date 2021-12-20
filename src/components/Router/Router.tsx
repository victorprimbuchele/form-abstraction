import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { myConfigData } from '../../contexts/ConfigStore'

const Router: React.FC = () => {
    return (
        <Suspense fallback={() => <div>Loading...</div>}>
            <Routes>
                <Route element={lazy(() => import(`./Contact`))} path="/" />
            </Routes>
        </Suspense>
    )
}

export default Router
