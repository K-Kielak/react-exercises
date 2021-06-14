import React, { ReactNode } from "react"

import { UnsplashImage } from "../api/unsplash"

interface ImageCardProps {
  key: string
  image: UnsplashImage
}

interface ImageCardState {
  spans: number
}

class ImageCard extends React.Component<ImageCardProps, ImageCardState> {
  state = { spans: 0 }
  imageRef = React.createRef<HTMLImageElement>()

  componentDidMount = (): void => {
    this.imageRef.current?.addEventListener("load", this.setSpans)
  }

  setSpans = (): void => {
    const currImg = this.imageRef.current
    if (currImg) {
      const height = currImg.clientHeight
      const spans = Math.ceil(height / 10)
      this.setState({ spans })
    } else {
      console.warn(
        `Image reference for ImageCard ${this.props.key} is undefined`,
      )
    }
  }

  render = (): ReactNode => {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={this.props.image.src} />
      </div>
    )
  }
}

export default ImageCard
