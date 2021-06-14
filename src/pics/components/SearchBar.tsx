import React, { ReactNode } from "react"

interface SearchBarProps {
  onSubmit: (term: string) => void
}

interface SearchBarState {}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = { term: "" }

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ term: event.target.value })
  }

  render = (): ReactNode => {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
