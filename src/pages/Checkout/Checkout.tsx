import { PageHero, CheckoutForm, } from "../../components"
import { useCartContext } from "../../context/CartContext"
import { CheckoutPageContainer } from "./index"
import { Link } from "react-router-dom"


const Checkout = () => {

  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title='checkout' />
      <CheckoutPageContainer className="page">
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <CheckoutForm />
        )
        }
      </CheckoutPageContainer>
    </main>
  )
}
export default Checkout