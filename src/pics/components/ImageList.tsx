import "./ImageList.css"
import React, { ReactElement } from "react"

import ImageCard from "./ImageCard"
import { UnsplashImage } from "../api/unsplash"

interface ImageListProps {
  images: UnsplashImage[]
}

const ImageList = (props: ImageListProps): ReactElement => {
  const images = props.images.map((image): ReactElement => {
    return <ImageCard key={image.id} image={image} />
  })

  return <div className="image-list">{images}</div>
}

export default ImageList
