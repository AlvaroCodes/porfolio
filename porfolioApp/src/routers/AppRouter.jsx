import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import { CardTechnology } from '../components/CardTechnology/CardTechnology';
import { NavBar } from '../components/NavBar/NavBar';


import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';


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
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Technology" element={<Technology/>} />
          <Route path="/Technology/:idTech" element={<CardTechnology/>} />
          <Route path='*' element={<Error404/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter