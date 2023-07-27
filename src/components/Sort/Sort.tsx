import { SortContainer } from "./index"
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from "../../context/FilterContext"



const Sort = () => {

  const { filteredProducts: products,
    gridView,
    setGrid,
    setList,
    sort,
    updateSort
  } = useFilterContext()



  return (
    <SortContainer>
      <div className="btn-container">
        <button type="button"
          className={gridView ? 'active' : ''}
          onClick={setGrid}>
          <BsFillGridFill />
        </button>
        <button type="button"
          className={gridView ? '' : 'active'}
          onClick={setList} >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort" id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}>

          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </SortContainer>
  )
}
export default Sort