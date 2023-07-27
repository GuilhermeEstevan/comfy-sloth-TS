import { FooterContainer } from "./index"

const Footer = () => {




  return (
    <FooterContainer>
      <h5>
        &copy; {new Date().getFullYear()} <span>ComfySloth</span>
      </h5>
      <h5>All rights reserved</h5>
    </FooterContainer>
  )
}
export default Footer