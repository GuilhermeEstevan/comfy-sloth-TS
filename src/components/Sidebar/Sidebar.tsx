import { SidebarContainer } from "./index"
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import { links } from "../../Utils/Constants"
import { FaTimes } from 'react-icons/fa'
import Cart_LoginBtn from "../Cart&loginBtn/Cart_LoginBtn"
import { useProductsContext } from "../../context/ProductsContext"
import { useUserContext } from "../../context/UserContext"

const Sidebar = () => {

  const { isSidebarOpen, setIsSidebarOpen, closeSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  return (
    <SidebarContainer>
      <aside
        className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy sloth" className="logo" />
          <button className="close-btn" type="button"
            onClick={() => { setIsSidebarOpen(!isSidebarOpen) }}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link

            return (
              <li key={id}>
                <Link to={url}
                  onClick={closeSidebar}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout'
                onClick={closeSidebar}>checkout</Link>
            </li>
          )}
        </ul>
        <Cart_LoginBtn />
      </aside>
    </SidebarContainer>
  )
}
export default Sidebar