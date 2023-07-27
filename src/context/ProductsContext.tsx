import { useContext, createContext, useState, useEffect } from "react";
import { IProductsContext, IProductsContextProps, IProduct, ISingleProduct } from ".";
import { products_url as url } from "../Utils/Constants";
import axios from 'axios'

const ProductsContext = createContext({} as IProductsContext)

export const ProductsProvider = ({ children }: IProductsContextProps) => {

    // Sidebar 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    // PRODUCTS
    const [isProductsLoading, setIsProductsLoading] = useState(true)
    const [isProductError, setIsProductsError] = useState(false)
    const [products, setProducts] = useState([] as IProduct[])
    const [featuredProducts, setFeaturedProducts] = useState([] as IProduct[])

    const getFeaturedProducts = (products: IProduct[]) => {
        const featuredProducts = products.filter((product) => { return product.featured === true })
        setFeaturedProducts(featuredProducts)
    }

    const fetchProducts = async (url: string) => {
        try {
            setIsProductsLoading(true)
            const response = await axios.get(url)
            const products = response.data
            setProducts(products)
            getFeaturedProducts(products)
            setIsProductsLoading(false)
        } catch (error) {
            setIsProductsError(true)
            setIsProductsLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts(url)
    }, [])

    // SINGLE PRODUCT

    const [SingleProductLoading, setSingleProductLoading] = useState(false)
    const [singleProductError, SetSingleProductError] = useState(false)
    const [singleProduct, setSingleProduct] = useState({} as ISingleProduct)

    const fetchSingleProduct = async (url: string) => {
        try {
            setSingleProductLoading(true)
            setIsProductsError(false)
            const response = await axios.get(url)
            const singleProduct = response.data
            setSingleProduct(singleProduct)
            setSingleProductLoading(false)
        } catch (error) {
            setSingleProductLoading(false)
            SetSingleProductError(true)
        }
    }



    return (
        <ProductsContext.Provider value={{
            isSidebarOpen,
            setIsSidebarOpen,
            closeSidebar,
            isProductsLoading,
            isProductError,
            products,
            featuredProducts,
            fetchSingleProduct,
            SingleProductLoading,
            singleProductError,
            singleProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => { return useContext(ProductsContext) }