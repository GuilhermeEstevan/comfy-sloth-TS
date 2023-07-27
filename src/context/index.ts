import { LogoutOptions } from '@auth0/auth0-react'
import { ReactNode, Dispatch, SetStateAction } from 'react'

// PRODUCT
export interface IProductsContext {
    isSidebarOpen: boolean
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
    closeSidebar: () => void
    isProductsLoading: boolean
    isProductError: boolean
    products: IProduct[]
    featuredProducts: IProduct[]
    fetchSingleProduct: (url: string) => void
    SingleProductLoading: boolean
    singleProductError: boolean
    singleProduct: ISingleProduct
}

export interface ISingleProduct {
    id: string
    stock: number
    price: number
    shipping: boolean
    colors: string[]
    category: string
    images: any
    reviews: number
    stars: number
    name: string
    description: string
    company: string
}

export interface IProductsContextProps {
    children: ReactNode
}

export interface IProduct {
    image: string
    name: string
    price: number
    id: string
    featured: boolean
    category: string
    colors: string[]
    company: string
    description: string
    shipping: boolean
}

// USER
export interface IUserContext {
    loginWithRedirect: () => void
    logout: (options?: LogoutOptions) => void;
    myUser: Iuser | null
}

export interface IUserContextProps {
    children: ReactNode
}

export interface Iuser {
    name?: string;
    email?: string;
}

// FILTER

export interface IFilterContext {
    filteredProducts: IProduct[]
    allProducts: IProduct[]
    gridView: boolean
    sort: string
    setGrid: () => void
    setList: () => void
    updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
    filters: IFilters
    updateFilters: (e: any) => void
    clearFilters: () => void
}

export interface IFilterContextProps {
    children: ReactNode
}

export interface IFilters {
    text: string
    company: string[] | string
    category: string[] | string
    color: string[] | string
    minPrice: number
    maxPrice: number
    price: number
    shipping: boolean
}

// CART

export interface ICartContext {
    cart: ICart[]
    totalItems: number
    totalAmount: number
    shipping: number
    addToCart: (id: string, color: string, amount: number, product: ISingleProduct) => void
    removeItem: (id: string) => void
    toggleAmount: (id: string, value: string) => void
    clearCart: () => void
}

export interface ICartContextProps {
    children: ReactNode
}

export interface ICart {
    id: string
    name: string
    color: string
    amount: number
    Image: string
    price: number
    max: number
}