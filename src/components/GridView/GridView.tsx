import { GridContainer } from "./index"
import Product from "../Product/Product"
import { IProduct } from "../../context"

const GridView = ({ products }: { products: IProduct[] }) => {


    return (
        <GridContainer>
            <div className="products-container">
                {products.map((product) => {

                    return <Product key={product.id} {...product} />
                })}
            </div>
        </GridContainer>
    )
}
export default GridView