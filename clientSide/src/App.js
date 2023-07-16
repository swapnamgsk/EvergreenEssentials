import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <Routes>
        <Route path = "navbar" Component ={Navbar}/>
        <Route path = "footer" Component ={Footer}/>
      </Routes>
    </div>
  );
}

export default App;
