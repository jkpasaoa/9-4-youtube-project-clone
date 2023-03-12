import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;