import { useState } from 'react'
import { CheckoutFormContainer } from './index'
import { formatPrice } from '../../Utils/Helpers'
import { useCartContext } from '../../context/CartContext'
import { useAuth0 } from '@auth0/auth0-react'
import { Wrapper } from './index'

const CheckoutForm = () => {

    const { totalAmount } = useCartContext()
    const { isLoading, user } = useAuth0()
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCVV] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const handleCardNumber = (e: any) => {
        let value = e.target.value
        value = value.replace(/\s/g, "").replace(/\D/g, "");
        value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
        value = value.slice(0, 19);
        setCardNumber(value)
    }
    const handleCvvNumber = (e: any) => {
        let value = e.target.value
        value = value.slice(0, 3);
        setCVV(value)
    }


    if (isLoading) {
        return (
            <Wrapper >
                Loading...
            </Wrapper>
        )
    }

    return (
        <CheckoutFormContainer className='page-100'>
            <h4>{user ? `hello, ${user.name}` : null}</h4>
            <p>{`Your total is ${formatPrice(totalAmount)}`}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cardNumber">
                    Number <br />
                    <input
                        type='text'
                        className='input'
                        name='cardNumber'
                        id='cardNumber'
                        value={cardNumber}
                        onChange={handleCardNumber}
                    />
                </label>
                <label htmlFor="cardName">
                    Name <br />
                    <input
                        type='text'
                        className='input'
                        name='cardName'
                        id='cardName'
                    />
                </label>
                <div className='expiration'>
                    <label htmlFor="month">
                        Month <br />
                        <select name="month" id="month" defaultValue='month'>
                            <option value="month" disabled >Month</option>
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="year">
                        Year <br />
                        <select name="year" id="year" defaultValue="year">
                            <option value="year" disabled >Year</option>
                            {Array.from({ length: 13 }, (_, index) => {
                                const currentYear = new Date().getFullYear()
                                const year = currentYear + index
                                return (
                                    <option value={year} key={year}>
                                        {year}
                                    </option>
                                )
                            })}
                        </select>
                    </label>
                    <label htmlFor="cvv" className='cvv'>
                        CVV <br />
                        <input
                            type="number"
                            name='cvv'
                            id='cvv'
                            value={cvv}
                            onChange={handleCvvNumber}
                        />
                    </label>
                </div>
                <button
                    className='btn'
                    type='submit'
                    onClick={handleSubmit}>
                    Submit Payment
                </button>
            </form>
        </CheckoutFormContainer>
    );

}


export default CheckoutForm