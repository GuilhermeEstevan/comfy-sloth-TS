import { CartContentContainer } from "./index"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartColumns from "../CartColumns/CartColumns"
import CartItem from "../CartItem/CartItem"
import CartTotals from "../CartTotals/CartTotals"

const CartContent = () => {

  const { cart, clearCart } = useCartContext()

  return (
    <CartContentContainer className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className="link-container">
        <Link to='/products' className="link-btn">
          continue shopping
        </Link>
        <button className="link-btn clear-btn"
          onClick={clearCart}>
          clear Cart
        </button>
      </div>
      <CartTotals />
    </CartContentContainer>
  )
}
export default CartContent