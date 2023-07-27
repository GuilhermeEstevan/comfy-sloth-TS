import { FeaturedContainer } from "./index"
import { useProductsContext } from "../../context/ProductsContext"
import { Link } from "react-router-dom"
import Error from "../Error/Error"
import Loading from "../Loading/Loading"
import Product from "../Product/Product"

const FeaturedProducts = () => {

  const {
    isProductsLoading,
    featuredProducts,
    isProductError } = useProductsContext()

  if (isProductsLoading) {
    return <Loading />
  }
  if (isProductError) {
    return <Error />
  }


  return (
    <FeaturedContainer className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.slice(0, 3).map((product) => {

          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className="btn">All products</Link>
    </FeaturedContainer>
  )
}


export default FeaturedProducts