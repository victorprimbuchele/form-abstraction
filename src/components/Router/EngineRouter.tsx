import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const EngineRouter: any = ({ routeData }: any) => {
    let component: any = ''

    console.log('opa')
    console.log(routeData)
    return routeData.map(async (element: any) => {
        component = lazy(() => import(`./${routeData.element}`))
        console.log('oi')
        console.log(element)
        return (
            <Routes>
                <Route>
                    key={element.key}
                    path={element.path}
                    element={element}
                </Route>
            </Routes>
        )
    })
}

export default EngineRouter
