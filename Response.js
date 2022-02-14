import React from 'react';
import {Link} from 'react-router-dom';

function Response(props) {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/" >
            <img src="logo.png" alt="xyz" className="img-fluid" />
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/Practice">Practice</a></li>
              <li className="nav-item active"><Link to="/" className="nav-link" id="link1" >Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About" id="link1">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Contact" id="link1">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <hr/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h2 className='display-4 text-center'>Your Response has been Successfullly Submitted!</h2>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h2 className='display-5 text-center' style={{color: 'red'}}>We'll contact your shortly.</h2>
            
        </div>
    );
}

export default Response;