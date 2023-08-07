
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import "./App.css";
function App() {
  return (
    <div>
      <Router>
        <Routes><Route path="/" element={<Banner />} /></Routes>
        <Routes><Route path="/About" element={<About />} /></Routes>
        <Routes><Route path="/Projects" element={<Projects />} /></Routes>
        <Routes><Route path="/Skills" element={<Skills />} /></Routes>
        <Routes><Route path="/Contact" element={<Footer />} /></Routes>
      </Router>



    </div>



  );
}

export default App;
