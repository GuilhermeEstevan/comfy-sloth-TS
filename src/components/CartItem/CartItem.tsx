import { CartItemContainer } from "./index"
import { formatPrice } from "../../Utils/Helpers"
import AmountButtons from "../AmountButtons/AmountButtons"
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from "../../context/CartContext"
import { ICart } from "../../context"


const CartItem = ({ id, Image, name, color, price, amount }: ICart) => {



  const { removeItem, toggleAmount } = useCartContext()

  const increase = () => {
    toggleAmount(id, 'increase')
  }
  const decrease = () => {
    toggleAmount(id, 'decrease')
  }

  return (
    <CartItemContainer>
      <div className="title">
        <img src={Image} alt={name} />
        <div>
          <h5>{name}</h5>
          <p className="color">
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" type="button" onClick={() => { removeItem(id) }}>
        <FaTrash />
      </button>
    </CartItemContainer>
  )
}
export default CartItem