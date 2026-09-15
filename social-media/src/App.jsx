import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Card from "./components/Card.jsx";
import Poster from "./components/post.jsx";
import 'boxicons'
import { useState } from "react";
import ContextTalhaProvider from "./store/ContextTalha.jsx";

function App() {
  const [navlink, setNavlink] = useState("Home")
  return (
    <ContextTalhaProvider>
    <div className="wholePage">
      <Sidebar className="Sidebar" navlink={navlink} setNavlink={setNavlink}></Sidebar>
      <div className="centeral">
        <Header />
       {navlink==="Home" && <Card/>} 
       {navlink==="Create Post" && <Poster/>} 
        <Footer />
      </div>
      </div>
      </ContextTalhaProvider>
  );
}

export default App;
