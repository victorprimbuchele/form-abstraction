import React from 'react'
import { makeAutoObservable } from 'mobx'
import proccessArray from '../components/Router/processArryay'
import config from '../config/config.json'

type IConfigData = {
    key: string
    path: string
    element: string
}

export type IRouteData = Array<IConfigData>

class ConfigData {
    routeData: any = {}
    constructor() {
        makeAutoObservable(this)
    }

    private catchData(): void {
        console.log('fala clovis')
        config.map(async (object) => {
            console.log(object)
            let component = await proccessArray(`${object.component_name}.tsx`)
            console.log(component)
            this.routeData[object.component_name].element =
                await component.default
            this.routeData[object.component_name].key = object.component_name
            this.routeData[object.component_name].path = object.path
        })
        console.log(this.routeData)
    }

    public async showData() {
        this.catchData()
        console.log(this.routeData)
        const data: {} = {
            routeData: this.routeData,
        }
        return data
    }
}

export const myConfigData = new ConfigData()
