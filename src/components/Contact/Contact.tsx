import { ContactContainer } from "./index"

const Contact = () => {


  return (
    <ContactContainer>
      <div className="section-center">
        <h3>Join our newsletter and get 20% OFF</h3>
        <div className="content">
          <p>
            At Comfy Sloth, we value open communication and are here to assist you. Feel free to reach out to our friendly and knowledgeable customer support team through email.
          </p>
          <form
            action="https://formspree.io/f/mvonngwk"
            method="POST"
            className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="Enter Email"
              name="_replyto"
              required />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  )
}
export default Contact