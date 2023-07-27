import { Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

interface IPrivateRoute {
  children: React.ReactNode
}


const PrivateRoute = ({ children }: IPrivateRoute) => {

  const { user } = useAuth0()

  if (!user) {
    return (
      <Navigate to='/' />
    )
  }

  return children
}

export default PrivateRoute