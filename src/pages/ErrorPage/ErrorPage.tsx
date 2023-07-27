import { Link } from "react-router-dom"
import { ErrorContainer } from "./index"

const ErrorPage = () => {


  return (
    <ErrorContainer className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className="btn">Back Home</Link>
      </section>
    </ErrorContainer>
  )
}
export default ErrorPage