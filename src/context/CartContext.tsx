import { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import { ICartContext, ICartContextProps, ICart, ISingleProduct } from ".";

const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: ICartContextProps) => {

    const getLocalStorage = (): ICart[] => {
        const cart = JSON.parse(localStorage.getItem('cart') as string) || [];
        return cart
    }


    const [cart, setCart] = useState<ICart[]>(getLocalStorage())
    const [totalItems, setTotalItems] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [shipping, setShipping] = useState(534)

    const addToCart = (id: string, color: string, amount: number, product: ISingleProduct) => {
        // VERIFY IF ITEM IS IN CART
        const tempItem = cart.find((item: ICart) => {
            return item.id === id + color
        })
        if (tempItem) {
            const tempCart = cart.map((cartItem: ICart) => {
                if (cartItem.id === id + color) {
                    let newAmount = cartItem.amount + amount
                    if (newAmount > cartItem.max) {
                        newAmount = cartItem.max
                    }
                    return { ...cartItem, amount: newAmount }
                }
                return cartItem
            })
            setCart(tempCart)
        }
        else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                Image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            const tempCart = [...cart, newItem]
            setCart(tempCart)
        }
    }

    const removeItem = (id: string) => {
        const tempCart = cart.filter((item: ICart) => item.id != id)
        setCart(tempCart)
    }

    const toggleAmount = (id: string, value: string) => {
        console.log(id, value);
        let tempCart = cart.map((item) => {
            if (item.id === id) {
                if (value === 'increase') {
                    let newAmount = item.amount + 1
                    if (newAmount > item.max) {
                        newAmount = item.max
                    }
                    return { ...item, amount: newAmount }
                }
                if (value === 'decrease') {
                    let newAmount = item.amount - 1
                    if (newAmount < 1) {
                        return null
                    }
                    return { ...item, amount: newAmount }
                }
            }
            return item
        })
        tempCart = tempCart.filter((item) => item !== null);
        setCart(tempCart as ICart[])
    }

    const clearCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        const totalAmount = cart.reduce((total, item) => {
            return total + item.amount * item.price
        }, 0)
        const totalItems = cart.reduce((total, item) => {
            return total + item.amount
        }, 0)
        setTotalAmount(totalAmount)
        setTotalItems(totalItems)
    }, [cart])

    return (
        <CartContext.Provider value={{
            totalItems,
            totalAmount,
            shipping,
            cart,
            addToCart,
            removeItem,
            toggleAmount,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => {
    return useContext(CartContext)
}