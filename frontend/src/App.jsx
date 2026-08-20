import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   
   
    </>
  )
}