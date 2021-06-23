import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  // onInputChange(e) {
  //   e.target.value;

  // }

  onFormSubmit = (e) => {
    // prevent browser from automatically submitting the form
    e.preventDefault();

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit}
          className="ui form">
          <div className="field">
            <label>Recipe Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
