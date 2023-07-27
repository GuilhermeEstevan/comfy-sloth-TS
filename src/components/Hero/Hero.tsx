import { HeroContainer } from "."
import { Link } from "react-router-dom"
import heroBcg from '../../assets/hero-bcg.jpeg'


const Hero = () => {


  return (
    <HeroContainer className="section-center">
      <article className="content">
        <h1>
          Design your <br />
          comfort zone
        </h1>
        <p>
          Creating a comfortable space is an art that reflects your personal style and preferences, where you can unwind, relax, and recharge.
        </p>
        <Link to='products' className="btn hero-btn">Shop Now</Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="main img" className="main-img" />
      </article>
    </HeroContainer>
  )
}
export default Hero