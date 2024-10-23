/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./components/Home/home"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import About from './components/About/about';
import Car from "./components/Cars/car";
import Contact from "./components/Contact/contact"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/cars' element={<Car />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
