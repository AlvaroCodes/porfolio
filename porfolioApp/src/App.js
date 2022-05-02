import './App.css';
import { BrowserRouter } from "react-router-dom";


import Footer from './components/Footer/Footer';

import { NavBar } from './components/NavBar/NavBar';
import Contact from './pages/Contact';
import AppRouter from './routers/AppRouter';
// import Projects from './pages/Projects';
// import Technology from './pages/Technology';



function App() {

  return (
   
      // <div className="App">

      // <NavBar/>

      // {/* <Projects/> */}
      // {/* <Technology/> */}

      // <Contact/>

      // <Footer/>
      // </div>

      <AppRouter/>
 
  );
}

export default App;
