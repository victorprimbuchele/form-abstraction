import React, { lazy, Suspense, useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import config from '../../config/config.json'
import proccessArray from './processArryay'

let routerData: any = {}
let nome: any = ''

const DynamicNavigation: React.FC = () => {
    const [isLoading, setIsLoading] = useState(Boolean)
    let component: any = []

    useEffect(() => {
        const getImport = async () => {
            return new Promise(async (resolve, reject) => {
                try {
                    setIsLoading(true)
                    config.map(async (object) => {
                        component = lazy(
                            async () =>
                                await import(
                                    /* @vite-ignore */ `./${object.component_name}`
                                )
                        )
                        // component = await proccessArray(
                        //     `${object.component_name}.tsx`
                        // )
                        nome = await component._payload._result

                        routerData[object.component_name] = {
                            nome: nome,
                            caminho: object.path,
                        }

                        setIsLoading(false)

                        return resolve(routerData)
                    })
                } catch (error) {
                    console.log(error)
                    return reject(error)
                }
            })
        }

        getImport()
    }, [routerData])

    return (
        <div className="oi">
            {isLoading ? (
                <h2>Tá carregando, jovi</h2>
            ) : (
                <BrowserRouter>
                    <Routes>
                        {Object.values(routerData).map(
                            (value: any, index: number) => {
                                console.log(value.caminho)
                                console.log(value.nome)
                                return (
                                    <Route
                                        key={index}
                                        path={value.caminho}
                                        element={value.nome}
                                    />
                                )
                            }
                        )}
                    </Routes>
                </BrowserRouter>
            )}
        </div>
    )
}

export default DynamicNavigation
