// processo o array
const proccessArray = (file: string): Promise<any> => {
    try {
        const component = import(/* @vite-ignore */ `./${file}`)
        return component
    } catch (err: any) {
        return err
    }
}

export default proccessArray
