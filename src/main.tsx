import { ProductsProvider } from './context/ProductsContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { FilterProvider } from './context/FilterContext.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Auth0Provider
    domain='dev-jtexi7myq7etjnac.us.auth0.com'
    clientId="Q5AyHxTm9tbFn5ERjwXfpHPUnCeSEvG1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>

)
