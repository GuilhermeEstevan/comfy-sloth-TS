import { ProductContainer } from "./index"
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { formatPrice } from "../../Utils/Helpers"
import { IProduct } from "../../context"


const Product = ({ image, name, price, id } : IProduct) => {



    return (
        <ProductContainer>
            <div className="container">
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className="link">
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </footer>
        </ProductContainer>
    )
}


export default Product