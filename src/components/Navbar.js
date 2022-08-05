import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="flex justify-center items-center p-4 bg-blue-400 shadow-md shadow-neutral-500 gap-4">
        <div className="logo">
          <img
            className="rounded-full w-12 h-12"
            src="https://rochmadnf.my.id/assets/images/logoku.jpg"
            alt="logo"
          />
        </div>
        <h1 className="text-3xl font-bold text-slate-50">Rochmad Notes</h1>
      </nav>
    );
  }
}

export default Navbar;
