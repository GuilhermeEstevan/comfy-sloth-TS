import { SingleProductContainer } from "./index"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useProductsContext } from "../../context/ProductsContext"
import { single_product_url as url } from "../../Utils/Constants"
import { formatPrice } from "../../Utils/Helpers"
import {
  Loading,
  AddToCart,
  Error,
  ProductImages,
  Stars,
  PageHero
} from "../../components"
import { useEffect } from "react"

const SingleProductPage = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const {
    fetchSingleProduct,
    SingleProductLoading,
    singleProductError,
    singleProduct
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    if (singleProductError) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [singleProductError])



  if (SingleProductLoading) {
    return <Loading />
  }
  if (singleProductError) {
    return <Error />
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images } = singleProduct

  return (
    <SingleProductContainer>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to='/products' className="btn">
          Back to Products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className="info">
              <span>Sku : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0
              ? <AddToCart product={singleProduct} />
              : null}
          </section>
        </div>
      </div>
    </SingleProductContainer>
  )
}
export default SingleProductPage