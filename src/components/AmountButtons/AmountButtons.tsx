import { AmountBtnsContainer } from "./index"
import { FaPlus, FaMinus } from 'react-icons/fa'

interface IAmountButtonsProps {
  increase: () => void
  decrease: () => void
  amount: number
}

const AmountButtons = ({ increase, decrease, amount }: IAmountButtonsProps) => {


  return (
    <AmountBtnsContainer className="amount-btns">
      <button type="button" className="amount-btn"
        onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn"
        onClick={increase}>
        <FaPlus />
      </button>
    </AmountBtnsContainer>
  )
}
export default AmountButtons