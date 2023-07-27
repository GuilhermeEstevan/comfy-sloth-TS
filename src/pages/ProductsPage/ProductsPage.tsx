import { ProductsPageContainer } from "./index"
import { Filters, ProductsList, Sort, PageHero } from "../../components"


const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <ProductsPageContainer className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </ProductsPageContainer>
    </main>
  )
}
export default ProductsPage