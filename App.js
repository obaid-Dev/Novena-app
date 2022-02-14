import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Practice from './Practice';
import Response from './Response';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Notfound from './Notfound';

function App() {
  var demo = "This is stored in a variable";
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Practice" element={<Practice/>} />
            <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<About />} abc={demo} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Response" element={<Response />} />
              <Route path="*" element={<Notfound />} />
         </Routes>
      </BrowserRouter>
      </div>
  );
}

/*function Layout(props) {
  return (
    <div>
      <nav className="Navbar Navbar-light">
        <ul>
        <li>
            <Link to="/Practice">Practice</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}*/


export default App;