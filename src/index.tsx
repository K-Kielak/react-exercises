import React, { ReactNode } from "react"
import ReactDOM from "react-dom"

import SeasonDisplay from "./SeasonDisplay"

interface AppProps {}

interface AppState {
  lattitude: number | null
  errorMessage: string | null
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = { lattitude: null, errorMessage: null }

  componentDidMount(): void {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lattitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message }),
    )
  }

  render(): ReactNode {
    if (this.state.lattitude != null) {
      return <div>Lattitude: {this.state.lattitude}</div>
    }

    if (this.state.errorMessage != null) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
