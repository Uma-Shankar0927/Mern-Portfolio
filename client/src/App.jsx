import React,{useState} from "react";
import "./index.css";
import { Navbar, Home, About, Projects, Contact,ProjectForm } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/projectform" element={<ProjectForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
