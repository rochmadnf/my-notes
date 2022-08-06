import React, { Component } from "react";
import { showFormattedDate } from "../utils";

class CardNote extends Component {
  render() {
    return (
      <div
        key={this.props.note.id}
        id={this.props.note.id}
        className="relative flex flex-col border border-blue-400 p-4 w-80 rounded-lg h-80"
      >
        <h1 className="font-bold text-xl text-blue-500">
          {this.props.note.title}
        </h1>
        <article className="flex flex-col gap-2">
          <h6 className="font-light text-sm text-slate-600">
            {showFormattedDate(this.props.note.createdAt)}
          </h6>
          <p className="text-gray-800">{this.props.note.body}</p>
        </article>
        <div className="absolute bottom-0 flex gap-4 p-4">
          <button className="text-white text-sm bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full">
            Delete
          </button>
          <button className="px-4 py-2 text-white text-sm bg-amber-500 hover:bg-amber-600 rounded-full">
            Archive
          </button>
        </div>
      </div>
    );
  }
}

export default CardNote;
