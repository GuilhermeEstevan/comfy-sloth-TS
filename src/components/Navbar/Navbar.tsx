import { NavContainer } from "./index"
import logo from '../.././../src/assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { links } from '../../Utils/Constants'
import Cart_LoginBtn from '../Cart&loginBtn/Cart_LoginBtn'
import { useProductsContext } from "../../context/ProductsContext"
import { useUserContext } from "../../context/UserContext"

const Navbar = () => {

  const { isSidebarOpen, setIsSidebarOpen } = useProductsContext()
  const { myUser } = useUserContext()

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt="Comfy Sloth" />
          </Link>
          <button type="button" className="nav-toggle"
            onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link
            return <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          )}
        </ul>
        <Cart_LoginBtn />
      </div>
    </NavContainer>
  )
}
export default Navbar