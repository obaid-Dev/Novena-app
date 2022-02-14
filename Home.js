import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-elastic-carousel';
import Item from './item';

function Home() {
  const style = {width: '350px', height: '350px'};
  const button = {fontsize: '10px'};
  const breakpoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1200, itemsToShow: 4}
  ];
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
              <li className="nav-item"><Link className="nav-link" to="/Practice" id="link1">Practice</Link></li>
              <li className="nav-item active"><Link to="/" className="nav-link" id="link1" >Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/About" id="link1" >About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Contact" id="link1">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block" style={{paddingTop: '70px'}}>
                <div className="divider mb-3" />
                <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                <p className="mb-4 pr-5">Novena health renowned staff provides medical care that spans across all specialties and functional areas of medicine. Learn more in depth information regarding our departments.</p>
                <div className="btn-container ">
                  <Link to="/Contact" className="btn btn-main-2 btn-danger btn-round-full">Make appoinment </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <secton className="App">
        {/*<Carousel autoPlay="true" autoFocus="true" axis="horizontal" interval={1000} >
          <div >            
            <h2>Image 1</h2>
            <img src="img-1.jpg" alt="xyz" style={style}/>
          </div>
          <div>
            <h2>Image 2</h2>
            <img src="img-2.jpg" alt="xyz"  style={style}/>
          </div>
          <div>
          <h2>Image 3</h2>
          <img src="img-3.jpg" alt="xyz"  style={style}/>
          </div>
    </Carousel>*/}
    <Carousel breakpoints={breakpoints}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
      <Item>Four</Item>
    </Carousel>
      </secton>
      <section>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="carousel-caption d-none d-md-block">
                <h2 className="text-center">First Slide</h2>
                <p>Text on slide One</p>
            </div>
            <img className="d-block w-100" src="pic1.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="pic2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="pic3.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      </section>
      <hr/>
      <section className="section about mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className="about-img">
                <img src="img-1.jpg" alt="" className="img-fluid" />
                <img src="img-2.jpg" className="img-fluid mt-4" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-img mt-4 mt-lg-0">
                <img src="img-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                <h2 className="title-color">Personal care <br />&amp; healthy living</h2>
                <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                <Link to="/Contact" className="btn btn-main-2 btn-round-full btn-icon">Contact<i className="icofont-simple-right ml-3" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section mt-3" id="counter">
        <div className="container-fluid">
          <div className="cta position-relative">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-doctor" />
                  <span className="count-up h1 text-center" data-from={10} data-to={20000} data-time={1000} >58</span>k
                  <p>Happy People</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-flag" />
                  <span className="h3 counter" data-count={700}>700</span>+
                  <p>Surgery Comepleted</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-badge" />
                  <span className="h3 counter" data-count={40}>40</span>+
                  <p>Expert Doctors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter-stat">
                  <i className="icofont-globe" />
                  <span className="h3 counter" data-count={20}>20</span>
                  <p>Worldwide Branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section service gray-bg mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2>Award winning patient care</h2>
                <div className="divider mx-auto my-4" />
                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
              </div>
            </div>
          </div>
          <hr className="line mb-3"/>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                <i className="fas fa-flask text-lg my-3 p-2 fa-2x" style={{color:'red'}} />
                 <h4 className="mt-3 mb-3">Laboratory services</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                <i className="fas fa-heartbeat text-lg my-3 p-2 fa-2x" style={{color:'red'}} />
                  <h4 className="mt-3 mb-3">Heart Disease</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                <i className="fas fa-tooth text-lg my-3 p-2 fa-2x" style={{color:'red'}} />
                  <h4 className="mt-3 mb-3">Dental Care</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                <i className="fas fa-procedures text-lg my-3 p-2 fa-2x" style={{color:'red'}} />
                  <h4 className="mt-3 mb-3">Body Surgery</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                <i className="fas fa-brain text-lg my-3 p-2 fa-2x" style={{color:'red'}} />
                  <h4 className="mt-3 mb-3">Neurology Surgery</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-4">
                <div className="icon d-flex align-items-center">
                <i className="fas fa-dna text-lg my-3 p-2 fa-2x" style={{color:'red'}} />
                  <h4 className="mt-3 mb-3">Gynecology</h4>
                </div>
                <div className="content">
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
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
            <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form action="POST " className="subscribe form-inline form-group px-3">
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



export default Home;