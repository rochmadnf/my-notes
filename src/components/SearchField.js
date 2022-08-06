import React, { Component } from "react";

class SearchField extends Component {
  render() {
    return (
      <div className="flex justify-center items-center">
        <div className="h-12 w-3/4">
          <input
            type="search"
            id="search-note"
            placeholder="Search notes..."
            className="
            font-medium p-6 outline-none border-2 border-slate-300 rounded-full w-full h-full
            placeholder:text-slate-300 placeholder:font-light
            text-gray-800 focus:border-2 focus:border-blue-400 focus:shadow-md focus:shadow-blue-300
            "
            onChange={this.props.onSearchChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchField;
