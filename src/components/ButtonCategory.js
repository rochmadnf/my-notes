import React, { Component } from "react";

class ButtonCategory extends Component {
  render() {
    return (
      <div className="w-full px-4 py-4 bg-white  text-blue-500 font-bold text-xl border-b-4 border-b-blue-500 text-center hover:border-b-blue-300 cursor-pointer hover:text-blue-300">
        {this.props.label}
      </div>
    );
  }
}

export default ButtonCategory;
