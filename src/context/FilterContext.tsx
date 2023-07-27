import { useContext, createContext, useState, useEffect } from 'react'
import { useProductsContext } from './ProductsContext'
import { IFilterContext, IFilterContextProps, IFilters, IProduct } from '.'



const FilterContext = createContext({} as IFilterContext)

export const FilterProvider = ({ children }: IFilterContextProps) => {

    const { products } = useProductsContext()
    const [filteredProducts, setFilteredProducts] = useState([] as IProduct[])
    const [allProducts, setAllProducts] = useState([] as IProduct[])
    const [gridView, setGridView] = useState(true)
    const [sort, setSort] = useState('price-lowest')
    const [filters, setFilters] = useState<IFilters>({
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        minPrice: 0,
        maxPrice: 0,
        price: 0,
        shipping: false
    })


    const setGrid = () => {
        setGridView(true)
    }
    const setList = () => {
        setGridView(false)
    }
    const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // const name = e.target.name
        const value = e.target.value
        setSort(value)
    }

    // const sortProducts = () => {
    //     let tempProducts = [...filteredProducts]

    //     if (sort === 'price-lowest') {
    //         tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    //     } else if (sort === 'price-highest') {
    //         tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    //     } else if (sort === 'name-a') {
    //         tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    //     } else if (sort === 'name-z') {
    //         tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    //     }

    //     setFilteredProducts(tempProducts)
    // }

    const updateFilters = (e: any) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'category') {
            value = e.target.textContent
        }
        if (name === 'color') {
            value = e.target.dataset.color
        }
        if (name === 'price') {
            value = Number(value)
        }
        if (name === 'shipping') {
            value = e.target.checked;
        }
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }))
    }

    const clearFilters = () => {
        let defaultFilters = {
            text: '',
            company: 'all',
            category: 'all',
            color: 'all',
            minPrice: 0,
            maxPrice: 0,
            price: 0,
            shipping: false
        }
        const prices = products.map((product) => product.price)
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        defaultFilters = {
            ...defaultFilters,
            maxPrice: maxPrice,
            minPrice: minPrice,
            price: maxPrice
        }
        console.log(defaultFilters);
        setFilters(defaultFilters)
    }

    const filterProducts = () => {

        let tempProducts = [...allProducts]
        const { text, category, company, color, price, shipping } = filters
        // TEXT
        if (text) {
            tempProducts = tempProducts.filter((product) =>
                product.name.toLowerCase().includes(text.toLowerCase())
            )
        }
        // CATEGORY
        if (category !== 'all') {
            tempProducts = tempProducts.filter((product) => {
                return product.category === category
            })
        }
        // COMPANY
        if (company !== 'all') {
            tempProducts = tempProducts.filter((product) => {
                return product.company === company
            })
        }
        // COLORS
        if (color !== 'all') {
            tempProducts = tempProducts.filter((product) => {
                return product.colors.find((c) => c === color)
            })
        }
        // PRICE
        if (price) {
            tempProducts = tempProducts.filter((product) => {
                return product.price <= price
            })
        }
        // SHIPPING
        if (shipping) {
            tempProducts = tempProducts.filter((product) => {
                return product.shipping === true
            })
        }
        setFilteredProducts(tempProducts)

        const sortProducts = () => {

            if (sort === 'price-lowest') {
                tempProducts = tempProducts.sort((a, b) => a.price - b.price);
            } else if (sort === 'price-highest') {
                tempProducts = tempProducts.sort((a, b) => b.price - a.price);
            } else if (sort === 'name-a') {
                tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sort === 'name-z') {
                tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
            }
            setFilteredProducts(tempProducts)
        }
        sortProducts()
    }


    useEffect(() => {
        const prices = products.map((product) => product.price)
        const minPrice = Math.min(...prices)
        const maxPrice = Math.max(...prices)
        setFilters((prevFilters) => ({
            ...prevFilters,
            maxPrice: maxPrice,
            minPrice: minPrice,
            price: maxPrice
        }))
        setAllProducts(products)
        setFilteredProducts(products)

    }, [products])

    useEffect(() => {
        filterProducts()
    }, [sort, filters]);


    return (
        <FilterContext.Provider value={{
            filteredProducts,
            allProducts,
            gridView,
            setGrid,
            setList,
            updateSort,
            filters,
            updateFilters,
            clearFilters,
            sort
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}
