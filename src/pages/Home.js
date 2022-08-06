import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonCategory, CardNote, SearchField } from "../components";
import { getInitialData } from "../utils/index";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: JSON.parse(sessionStorage.getItem("notes")) ?? getInitialData(),
      activeCategory: "allNote",
      querySearch: "",
    };

    this.onClickCategoryNote = this.onClickCategoryNote.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onArchiveClick = this.onArchiveClick.bind(this);
  }

  componentDidMount() {
    const storage = sessionStorage.getItem("notes");
    if (!storage)
      sessionStorage.setItem("notes", JSON.stringify(getInitialData()));
  }

  onDeleteClick(event) {
    const updateNotes = JSON.parse(sessionStorage.getItem("notes")).filter(
      (note) => note.id !== Number(event.target.getAttribute("data-id"))
    );
    sessionStorage.setItem("notes", JSON.stringify(updateNotes));
    this.setState(() => {
      return {
        notes: JSON.parse(sessionStorage.getItem("notes")),
      };
    });
  }

  onArchiveClick(event) {
    const updateNotes = JSON.parse(sessionStorage.getItem("notes")).map(
      (note) => {
        if (note.id === Number(event.target.getAttribute("data-id"))) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }
    );
    sessionStorage.setItem("notes", JSON.stringify(updateNotes));
    this.onNotesChanges(
      JSON.parse(sessionStorage.getItem("notes")),
      this.state.activeCategory
    );
  }

  onNotesChanges(notes, activeTab) {
    const query = document.getElementById("search-note").value.toLowerCase();
    if (activeTab !== "allNote") {
      const archived = activeTab === "activeNote" ? false : true;
      notes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query) && note.archived === archived
      );
    } else {
      notes = notes.filter((note) => note.title.toLowerCase().includes(query));
    }

    return this.setState(() => {
      return {
        notes,
        activeCategory: activeTab,
      };
    });
  }

  onClickCategoryNote(event) {
    this.onNotesChanges(
      JSON.parse(sessionStorage.getItem("notes")),
      event.target.getAttribute("data-label")
    );
  }

  onSearchChange(event) {
    this.onNotesChanges(
      JSON.parse(sessionStorage.getItem("notes")),
      this.state.activeCategory
    );
  }

  render() {
    return (
      <div className="mx-6 flex flex-col gap-20 justify-center">
        <SearchField onSearchChange={this.onSearchChange} />
        <Link
          to={"/add-note"}
          replace={true}
          className="w-1/2 lg:w-1/4 flex justify-center self-center gap-4 px-2 py-4 border-2 border-blue-500 mx-6 text-blue-500 font-medium text-xl items-center rounded-xl hover:bg-blue-500 hover:text-white"
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
        <div className="flex flex-col gap-10 pb-10">
          <div className="flex flex-col sm:flex-row mx-6 gap-8">
            <ButtonCategory
              label="All Notes"
              dataLabel="allNote"
              activeClass={this.state.activeCategory}
              whenClick={this.onClickCategoryNote}
            />
            <ButtonCategory
              label="Active Notes"
              dataLabel="activeNote"
              activeClass={this.state.activeCategory}
              whenClick={this.onClickCategoryNote}
            />
            <ButtonCategory
              label="Archived Notes"
              dataLabel="archiveNote"
              activeClass={this.state.activeCategory}
              whenClick={this.onClickCategoryNote}
            />
          </div>

          <div className="flex flex-wrap mx-6 border rounded-md border-slate-200 justify-center gap-4 p-8 content-center items-center">
            {this.state.notes.length === 0 ? (
              <div className="text-lg text-center w-full">
                Notes are not available
              </div>
            ) : (
              this.state.notes.map((note) => (
                <CardNote
                  note={note}
                  key={note.id}
                  onDeleteClick={this.onDeleteClick}
                  onArchiveClick={this.onArchiveClick}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
