import React from 'react'
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import Footer from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';
import { About } from '../pages/About/About';

import Contact from '../pages/Contact';


import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Technology from '../pages/Technology';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Technology" element={<Technology/>} />
      </Routes>
      </BrowserRouter>

        <Footer/>
    </div>
  )
}

export default AppRouter