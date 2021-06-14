import React, { ReactNode } from "react"

import SearchBar from "./SearchBar"
import unsplash from "../api/unsplash"

interface AppState {
  // ignore setting return type for unsplash, too much work for simple exercise
  images: any[]
}

class App extends React.Component<{}, AppState> {
  state = { images: [] }

  onSearchSubmit = async (term: string): Promise<void> => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    })

    this.setState({ images: response.data.results })
  }

  render = (): ReactNode => {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App
