import { Wrapper } from "./index"
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useProductsContext } from "../../context/ProductsContext"
import { useCartContext } from "../../context/CartContext"
import { useUserContext } from "../../context/UserContext"
import { LogoutOptions } from "@auth0/auth0-react"

const Cart_LoginBtn = () => {

    const { closeSidebar } = useProductsContext()
    const { totalItems, clearCart } = useCartContext()
    const { loginWithRedirect, myUser, logout } = useUserContext()

    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to='/cart' className="cart-btn"
                onClick={closeSidebar}>
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">{totalItems}</span>
                </span>
            </Link>
            {myUser ?
                (<button
                    type="button"
                    className="auth-btn"
                    onClick={() => {
                        clearCart()
                        logout({
                            returnTo: window.location.origin
                        } as LogoutOptions)
                    }}>
                    Logout <FaUserMinus />
                </button>
                ) : (<button
                    type="button"
                    className="auth-btn"
                    onClick={loginWithRedirect}>
                    Login <FaUserPlus />
                </button>
                )}
        </Wrapper>
    )
}
export default Cart_LoginBtn