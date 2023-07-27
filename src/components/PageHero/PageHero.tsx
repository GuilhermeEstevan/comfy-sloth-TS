import { Link } from "react-router-dom"
import { PageHeroContainer } from "."

interface IPageHero {
    title: string
    product?: boolean
}

const PageHero = ({ title, product }: IPageHero) => {


    return (
        <PageHeroContainer>
            <div className="section-center">
                <h3>
                    <Link to='/'>Home</Link>
                    {product
                        ? <Link to='/products'>/ Products</Link>
                        : null}
                    / {title}
                </h3>
            </div>
        </PageHeroContainer>
    )
}


export default PageHero