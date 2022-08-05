import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { CreateNote, Home } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-8">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-note" element={<CreateNote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
