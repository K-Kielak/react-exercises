import React, { ReactNode } from "react"

import ImageList from "./ImageList"
import SearchBar from "./SearchBar"
import unsplash, { UnsplashImage } from "../api/unsplash"

interface AppState {
  images: UnsplashImage[]
}

class App extends React.Component<{}, AppState> {
  state = { images: [] }

  onSearchSubmit = async (term: string): Promise<void> => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    })

    const getImageUrl = (image: any): UnsplashImage => {
      return {
        id: image.id,
        src: image.urls.regular,
      }
    }
    this.setState({ images: response.data.results.map(getImageUrl) })
  }

  render = (): ReactNode => {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
