import Navbar from "./components/common/Navbar";
import About from "./components/about/About";
import SearchBar from "./components/common/SearchBar";
import Home from "./components/home/Home";
import VideosIndex from "./components/videosIndex/VideosIndex"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">

      <Navbar />
      <SearchBar setSearchInput={setSearchInput} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<VideosIndex />} />

      </Routes>

    </div>
  );
}

export default App;