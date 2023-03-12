import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import NoMatch from "./components/noMatch";
import SearchBar from "./components/searchBar";
import BrowseBeers from "./components/browseBeers";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/browsebeers" element={<BrowseBeers />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
