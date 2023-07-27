import { ListContainer } from "./index"
import { formatPrice } from "../../Utils/Helpers"
import { Link } from "react-router-dom"
import { IProduct } from "../../context"


const ListView = ({ products }: { products: IProduct[] }) => {



  return (
    <ListContainer>
      {products.map((product) => {
        const { id, name, image, price, description } = product


        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </ListContainer>
  )
}
export default ListView