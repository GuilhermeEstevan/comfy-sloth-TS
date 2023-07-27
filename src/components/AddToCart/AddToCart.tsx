import { AddToCartContainer } from "./index"
import { FaCheck } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import AmountButtons from "../AmountButtons/AmountButtons"
import { useState } from "react"
import { ISingleProduct } from "../../context"

interface IAddToCartProps {
  product: ISingleProduct
}



const AddToCart = ({ product }: IAddToCartProps) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product

  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount(() => {
      const newAmount = amount + 1
      if (newAmount > stock) {
        return amount
      }
      return newAmount
    })

  }
  const decrease = () => {
    setAmount(() => {
      const newAmount = amount - 1
      if (newAmount === 0) {
        return amount
      }
      return newAmount
    })

  }

  return (
    <AddToCartContainer>
      <div className="colors">
        <span> colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button key={index}
                className={`${mainColor === color
                  ? 'color-btn active'
                  : 'color-btn'}`}
                style={{ background: color }}
                onClick={() => { setMainColor(color) }}>
                {mainColor === color
                  ? <FaCheck />
                  : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease} />
        <Link
          to='/cart'
          className="btn"
          onClick={() => { addToCart(id, mainColor, amount, product) }}>
          Add To Cart
        </Link>
      </div>
    </AddToCartContainer>
  )
}
export default AddToCart