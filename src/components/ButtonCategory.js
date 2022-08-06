import React, { Component } from "react";

class ButtonCategory extends Component {
  render() {
    return (
      <div
        className={`w-full px-4 py-4 bg-white font-bold text-xl text-center cursor-pointer
      ${
        this.props.dataLabel === this.props.activeClass
          ? "text-blue-400 border-b-4 border-b-blue-400"
          : "text-slate-200 border-b-slate-200"
      }
      hover:border-b-blue-300 hover:text-blue-300`}
        data-label={this.props.dataLabel}
        onClick={this.props.whenClick}
      >
        {this.props.label}
      </div>
    );
  }
}

export default ButtonCategory;
