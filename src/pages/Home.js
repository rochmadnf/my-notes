import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonCategory, SearchField } from "../components";

class Home extends Component {
  render() {
    return (
      <div className="mx-6 flex flex-col gap-20 justify-center">
        <SearchField />
        <Link
          to={"/add-note"}
          className="w-1/2 flex justify-center self-center gap-4 px-2 py-4 border-2 border-blue-500 mx-6 text-blue-500 font-medium text-xl items-center rounded-xl hover:bg-blue-500 hover:text-white"
        >
          <svg
            className="w-8 h-8 self-center"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M9.56 18v-5M12 15.5H7M8 2v3M16 2v3M15.81 3.42c3.34.12 5.03 1.35 5.13 6.05l.13 6.17c.08 4.12-.87 6.19-5.87 6.3l-6 .12c-5 .1-6.04-1.94-6.12-6.05l-.14-6.18c-.1-4.7 1.55-6 4.87-6.25l8-.16Z"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Add Note
        </Link>
        <div className="flex flex-col">
          <div className="flex mx-6 gap-8">
            <ButtonCategory label="Active Notes" />
            <ButtonCategory label="Archived Notes" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
