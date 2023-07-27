import { ServicesContainer } from "./index"
import { services } from "../../Utils/Constants"


const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <article className="header">
          <h3>custom furniture</h3>
          <p>
            With a focus on customer satisfaction, Comfy Sloth aims to deliver products that enhance relaxation, promote self-care, and inspire a sense of well-being
          </p>
        </article>
        <div className="services-center">
          {services.map((item) => {
            const { id, text, title, icon } = item

            return (
              <article key={id} className="service">
                <span className="icon">
                  {icon}
                </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </ServicesContainer>
  )
}
export default Services