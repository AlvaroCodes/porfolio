import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import Projects from './pages/Projects';
// import Technology from './pages/Technology';



function App() {

  return (
    <div className="App">

     <NavBar/>

    <Projects/>
    {/* <Technology/> */}

    </div>
  );
}

export default App;
