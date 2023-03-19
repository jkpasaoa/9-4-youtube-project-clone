import Navbar from "./components/common/Navbar";
import About from "./components/about/About";
import SearchBar from "./components/common/SearchBar";
import Home from "./components/home/Home";
import VideosIndex from "./components/videosIndex/VideosIndex";
import Video from "./components/videosIndex/Video";
import ErrorMessage from "./components/errors/ErrorMessage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {

  const [searchInput, setSearchInput] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [maxResults, setMaxResults] = useState(10);

  return (
    <div className="App">

      <Navbar />
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchTitle={setSearchTitle}
        setMaxResults={setMaxResults}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorMessage />} />
        <Route
          path="/videos"
          element={
            <VideosIndex
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              searchTitle={searchTitle}
              setSearchTitle={setSearchTitle}
              maxResults={maxResults}
            />} />
        <Route path="/videos/:id" element={<Video />} />

      </Routes>

    </div>
  );
}

export default App;