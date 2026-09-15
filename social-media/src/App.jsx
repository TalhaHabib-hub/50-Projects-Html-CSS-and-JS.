import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Card from "./components/Card.jsx";
import Poster from "./components/post.jsx";
import { useState } from "react";

function App() {
  const [navlink, setNavlink] = useState("Home")
  return (
    <div className="wholePage">
      <Sidebar className="Sidebar" navlink={navlink} setNavlink={setNavlink}></Sidebar>
      <div className="centeral">
        <Header />
       {navlink==="Home" && <Card/>} 
       {navlink==="Create Post" && <Poster/>} 
        <Footer />
      </div>
    </div>
  );
}

export default App;
