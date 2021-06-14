import React, { ReactNode } from "react"

interface SearchBarProps {}

interface SearchBarState {}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state = { term: "" }

  render(): ReactNode {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({ term: e.target.value })
    }

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
