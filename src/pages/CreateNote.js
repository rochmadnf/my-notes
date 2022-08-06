import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    let notes = JSON.parse(sessionStorage.getItem("notes"));
    if (!notes) {
      notes = [];
    }
    notes.push({
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      createdAt: new Date().toISOString(),
      archived: false,
    });
    sessionStorage.setItem("notes", JSON.stringify(notes));
    const toHomePage = document.getElementById("back-button");
    toHomePage.click();
  }
  render() {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold pb-2 border-b-4 border-b-blue-400">
          Create a note
        </h1>

        <form
          className="border border-blue-300 p-4 sm:p-8 w-11/12 sm:w-1/2 rounded-md shadow-md shadow-blue-300"
          onSubmit={this.onSubmitHandler}
        >
          {/* input */}
          <div className="flex flex-col mb-5 gap-1">
            <label htmlFor="title" className="font-medium text-base sm:text-lg">
              Title
            </label>
            <input
              type="text"
              className="outline-none rounded-md border-slate-300 form-input focus:outline-none focus:border-blue-300 focus:shadow focus:shadow-blue-300"
              name="title"
              placeholder="Title here..."
              onChange={(event) =>
                this.setState(() => {
                  return { title: event.target.value };
                })
              }
            />
          </div>

          {/* textarea */}
          <div className="flex flex-col mb-5 gap-1">
            <label htmlFor="body" className="font-medium text-base sm:text-lg">
              Body
            </label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              className="form-textarea resize-none rounded-md border-slate-300 focus:outline-none focus:border-blue-300 focus:shadow focus:shadow-blue-300"
              placeholder="Write note here..."
              onChange={(event) =>
                this.setState(() => {
                  return { body: event.target.value };
                })
              }
            ></textarea>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 w-full text-white font-base text-lg rounded-xl"
            >
              Add
            </button>
            <Link
              id="back-button"
              to={"/"}
              replace={true}
              type="button"
              className="text-center px-4 py-2 bg-gray-700 w-full text-gray-100 font-base text-lg rounded-xl"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateNote;
