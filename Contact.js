import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Form from './Form';
import {myform} from './Register';
import Button from '@mui/material/Button';

const Contact = () => {
    const navigate = useNavigate();
    const onSubmit = async(data)=>{
        await myform(data);
        navigate('/Response');
  }
  return (
        <div>
             <nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="xyz" className="img-fluid" />
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link className="nav-link" to="/" id="link1">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About" id="link1">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Contact" id="link1">Contact</Link></li>
            </ul>
          </div>
        </div>
        </nav>
        <hr style={{width: '100%', height: '0px', color: 'black'}}/>
        <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
                <hr style={{width: '30%', height: '0px', color: 'red'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="section contact-info pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact-block mb-4 mb-lg-0">
                  <i className="fas fa-phone-square-alt fa-3x" style={{color:'red'}} />
                  <h5>Call Us</h5>
                  +823-4565-13456
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-block mb-4 mb-lg-0">
                  <i className="far fa-envelope fa-3x" style={{color:'red'}} />
                  <h5>Email Us</h5>
                  contact@mail.com
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="contact-block mb-4 mb-lg-0">
                  <i className="fas fa-thumbtack fa-3x" style={{color:'red'}} />
                  <h5>Location</h5>
                  North Main Street,Brooklyn Australia
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h2 className="text-md mb-2" style={{color: 'red'}}>Contact us</h2>
                  <hr style={{width: '40%',color: 'green',height:'4px'}}/>
                  <div className="divider mx-auto my-4" />
                  <p className="mb-5">If you have any questions or concerns, please do not hesitate to contact us via phone, email, or by filing out the message box below.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Form onSubmit={onSubmit}/>
              </div>
            </div>
          </div>
        </section>
        <hr/>
        <footer className="container">
        <div className="footer-btm">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                Copyright © 2022, Designed &amp; Developed by <Link to="/">Obaid ur rehman</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe form-inline form-group">
                  <input type="text" className="form-control" placeholder="Your Email address" required />
                  <Button variant="outlined" color="error" style={{marginLeft:'28px'}}>Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
}

export default Contact;
