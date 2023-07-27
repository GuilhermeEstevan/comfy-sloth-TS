import ListView from "../ListView/ListView"
import GridView from "../GridView/GridView"
import { useFilterContext } from "../../context/FilterContext"

const ProductsList = () => {

    const { filteredProducts, gridView } = useFilterContext()

    if (filteredProducts.length < 1) {
        return <h5 style={{ textTransform: 'none' }}>
            Sorry, no products found...
        </h5>
    }
    if (gridView === false) {
        return <ListView products={filteredProducts} />
    }
    return (
        <GridView products={filteredProducts} />
    )
}
export default ProductsList