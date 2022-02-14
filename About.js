import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaFireAlt } from 'react-icons/fa';

function About() {
  
  const fontStyles = { color: 'red', fontSize: '20px',marginTop: '2px' };

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
      <hr/>
      <h1 id='about'>About Us!</h1>
      <hr style={{width:'30%',marginTop:'60px'}}/>
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">Personal care for your healthy living</h2>
            </div>
            <div className="col-lg-8">
              <p>Our staff of American and British Board certified doctors provide a full spectrum of treatment and preventative services. Our nurses and support staff are committed to your wellbeing. Our services are designed to provide the most comprehensive benefits to patients from all walks of life.</p>
              <img src="sign.png" alt="xyz" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="fetaure-page ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="about-block-item mb-5 mb-lg-0">
                  <img src="about-1.jpg" alt="" className="img-fluid w-100" />
                  <h4 className="mt-3">Healthcare for Kids</h4>
                  <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-block-item mb-5 mb-lg-0">
                  <img src="about-2.jpg" alt="" className="img-fluid w-100" />
                  <h4 className="mt-3">Medical Counseling</h4>
                  <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-block-item mb-5 mb-lg-0">
                  <img src="about-3.jpg" alt="" className="img-fluid w-100" />
                  <h4 className="mt-3">Modern Equipments</h4>
                  <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="about-block-item">
                  <img src="about-4.jpg" alt="" className="img-fluid w-100" />
                  <h4 className="mt-3">Qualified Doctors</h4>
                  <p>Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium .</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className="display-4 text-center mt-3">Find Us on Google Maps!</h2>
        <hr style={{width: '30%', height:'1.2px', marginBottom:'-2px'}}/>
        <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.613500223943!2d74.27054481499415!3d31.45230568139214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017c57d47a3f%3A0xc8123ed11e6b81c9!2sPNY%20Trainings%20Johar%20Town%20Branch!5e0!3m2!1sen!2s!4v1643809986231!5m2!1sen!2s" width={800} height={450} style={{border: 0,marginLeft: "350px",marginTop:"50px",marginBottom:"50px"}} allowFullScreen loading="lazy" />
        </section>
        <section>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">This page says: </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                 <FaFireAlt style={fontStyles}/>{"   "}
                Congratulations! You have successfully subscribed.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-primary btn-md" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </section>
        <hr/>
        <footer className="container ">
        <div className="footer-btm">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                Copyright © 2022, Designed &amp; Developed by <Link to="/">Obaid ur rehman</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="#" className="subscribe form-inline form-group">
                  <input type="text" className="form-control" placeholder="Your Email address" required />
                  <Button variant="outlined" color="error" style={{marginLeft:'28px'}} data-toggle="modal" data-target="#exampleModal">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
}

export default About;