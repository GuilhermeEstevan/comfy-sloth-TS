import { CartTotalsContainer } from "./index"
import { useCartContext } from "../../context/CartContext"
import { formatPrice } from "../../Utils/Helpers"
import { Link } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"


const CartTotals = () => {

  const { totalAmount, shipping } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <CartTotalsContainer>
      <div>
        <article>
          <h5>subtotal : <span>{formatPrice(totalAmount)}</span></h5>
          <p>shipping : <span>{formatPrice(shipping)}</span></p>
          <hr />
          <h4>order total : <span>{formatPrice(totalAmount + shipping)}</span></h4>
        </article>
        {
          myUser ? (
            <Link to='/checkout' className="btn">
              proceed to checkout
            </Link>
          ) : (
            <button onClick={loginWithRedirect} className="btn" type="button">
              Login
            </button>
          )
        }
      </div>
    </CartTotalsContainer>
  )
}
export default CartTotals