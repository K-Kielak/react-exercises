import React, { ReactElement } from "react"

import { UnsplashImage } from "../api/unsplash"

interface ImageListProps {
  images: UnsplashImage[]
}

const ImageList = (props: ImageListProps): ReactElement => {
  const images = props.images.map((image): ReactElement => {
    return <img key={image.id} src={image.src} />
  })

  return <div>{images}</div>
}

export default ImageList
