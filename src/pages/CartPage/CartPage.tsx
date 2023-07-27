import { CartPageContainer } from "./index"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { CartContent, PageHero } from "../../components"

const CartPage = () => {

  const { cart } = useCartContext()
  console.log(cart);


  if (cart.length < 1) {

    return (
      <CartPageContainer className="page-100">
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to='/products' className="btn">
            back to products
          </Link>
        </div>
      </CartPageContainer>
    )
  }

  return (
    <main>
      <PageHero title='cart'/>
      <CartPageContainer className="page">
        <CartContent />
      </CartPageContainer>
    </main>
  )
}
export default CartPage