import { FiltersContainer } from "./index"
import { FaCheck } from 'react-icons/fa'
import { formatPrice, getUniqueValues } from "../../Utils/Helpers"
import { useFilterContext } from "../../context/FilterContext"


const Filters = () => {

  const {
    filters,
    updateFilters,
    clearFilters,
    allProducts
  } = useFilterContext()
  const {
    text,
    category,
    company,
    color,
    minPrice,
    maxPrice,
    price,
    shipping
  } = filters


  const categories = getUniqueValues(allProducts, 'category')
  const companies = getUniqueValues(allProducts, 'company')
  const colors = getUniqueValues(allProducts, 'colors')



  return (
    <FiltersContainer>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilters} />
          </div>
          {/* end of search input */}
          {/* CATEGORIES */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c: any, index: number) => {
                // console.log(c);
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={updateFilters}
                    name="category"
                    className={`${category === c.toLowerCase()
                      ? 'active'
                      : null}`}>
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* CATEGORIES */}
          {/* COMPANIES */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company">
              {companies.map((c: any, index: number) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                )
              })}
            </select>
          </div>
          {/*END OF COMPANIES */}
          {/* COLORS */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c: any, index: number) => {
                // console.log(c);
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={`${color === 'all' ? 'all-btn active' : 'all-btn'
                        }`}
                    >
                      all
                    </button>
                  )
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${color === c ? 'color-btn active' : 'color-btn'
                      }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>
          {/* END OF COLORS */}
          {/* PRICE */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">
              {formatPrice(price)}
            </p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price} />
          </div>
          {/* END OF PRICE */}
          {/* SHIPPING */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name="shipping" id="shipping"
              onChange={updateFilters} checked={shipping} />
          </div>
          {/* END OF SHIPPING */}
        </form>
        <button
          className="clear-btn"
          type="button"
          onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </FiltersContainer>
  )
}
export default Filters