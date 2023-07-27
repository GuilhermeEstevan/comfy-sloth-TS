import { useState } from "react"
import { ProductImagesContainer } from "./index"

const ProductImages = ({ images = [{ url: '', filename: 'image' }] }) => {

  const [main, setMain] = useState(images[0])

  // console.log(main);

  return (
    <ProductImagesContainer>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            < img
              src={image.url}
              alt={image.filename as string}
              key={index}
              onClick={() => { setMain(images[index]) }}
              className={`${image.url === main.url
                ? 'active'
                : null}`} />
          )
        })}
      </div>
    </ProductImagesContainer>
  )
}
export default ProductImages