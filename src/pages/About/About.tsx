import { AboutContainer } from "./index"
import { PageHero } from "../../components"
import aboutImg from '../../assets/hero-bcg.jpeg'


const About = () => {


  return (
    <main>
      <PageHero title='about' />
      <AboutContainer className="page section section-center">
        <img src={aboutImg} alt="about image" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>Comfy Sloth is an online store dedicated to providing comfort and quality of life, offering cozy products ranging from relaxing clothing to furniture and decor to create welcoming environments. With a focus on customer satisfaction, Comfy Sloth aims to deliver products that enhance relaxation, promote self-care, and inspire a sense of well-being. Whether you're looking to unwind in soft loungewear, snuggle up with plush blankets, or create a soothing atmosphere with ambient lighting, Comfy Sloth has you covered. Explore their carefully curated collection and transform your space into a haven of comfort and tranquility.</p>
        </article>
      </AboutContainer>
    </main>
  )
}
export default About