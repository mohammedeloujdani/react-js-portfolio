import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Inro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Words/Works";
import Portfolio from "./Components/Portfolio/Portfolio"
import Textmonial from './Components/Testmonial/Testmonial'
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Textmonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
