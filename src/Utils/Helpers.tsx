import { IProduct } from "../context"

export const formatPrice = (price: number) => {
    const newPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price / 100)
    return newPrice
}



export const getUniqueValues = (data: IProduct[], type: keyof IProduct) => {

    let unique = data.map((item) => item[type])
    if (type === 'colors') {
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}
